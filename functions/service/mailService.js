const axios = require("axios");

// const params = { search:{keyword:"안녕"} };
// axios.get("http://api.com", {params});

// // http://api.com?search[keyword]=안녕

const untrashMail = async (startDate, endDate, token) => {
  const getUrl = `https://gmail.googleapis.com/gmail/v1/users/me/messages`;
  const dateQuery = `after:${startDate} before:${endDate}`;
  let count, messagesInTrash, messagesByDate;

  const mailInTrash = await axios.get(getUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { q: "in:trash", includeSpamTrash: true },
  });

  const mailByDate = await axios.get(getUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { q: dateQuery, includeSpamTrash: true },
  });

  if (mailInTrash.data.resultSizeEstimate > 0) {
    messagesInTrash = mailInTrash.data.messages;
    const deleteMail = (id) => {
      return axios.create({
        baseURL: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/untrash`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    };

    messagesInTrash.map(async (message) => {
      setTimeout(async () => {
        count += 1;
        console.log(`Removing ${message.id}`);
        await deleteMail(message.id).post();
      }, 1000);
    });
  }

  if (mailByDate.data.resultSizeEstimate > 0) {
    messagesByDate = mailByDate.data.messages;

    const moveToTrash = (id) => {
      return axios.create({
        baseURL: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/trash`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    };

    const deleteMail = (id) => {
      return axios.create({
        baseURL: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/untrash`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    };

    messagesByDate.map(async (message) => {
      setTimeout(async () => {
        count += 1;
        console.log(`Removing ${message.id}`);
        await moveToTrash(message.id).post();

        const mailInTrash = await axios.get(getUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { q: "in:trash", includeSpamTrash: true },
        });

        await deleteMail(message.id).post();
      }, 1000);
    });
  }

  return count;
};

module.exports = { untrashMail };

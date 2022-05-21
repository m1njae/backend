const axios = require("axios");
const sleep = (m) => new Promise((r) => setTimeout(r, m));

const untrashMail = async (startDate, endDate, token) => {
  const getUrl = `https://gmail.googleapis.com/gmail/v1/users/me/messages`;
  const dateQuery = `after:${startDate} before:${endDate}`;
  let count = 0;
  let mailInTrash, mailByDate, mailInTrashAfterClear;
  // delete https://gmail.googleapis.com/gmail/v1/users/{userId}/messages/{id}

  mailByDate = await axios.get(getUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { q: dateQuery, includeSpamTrash: true },
  });

  console.log(mailByDate);

  const messagesByDate = mailByDate.data.messages;
  console.log(messagesByDate);

  const deleteMail = (id) => {
    return axios.create({
      baseURL: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // console.log(messagesByDate);
  if (messagesByDate) {
    messagesByDate.forEach(async (message, index) => {
      setTimeout(async () => {
        count += 1;
        console.log(`Removing ${message.id}`);
        await deleteMail(message.id).delete();
      }, 500 * (index + 1));
    });
  }

  // mailByDateAfterClear = await axios.get(getUrl, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   params: { q: dateQuery, includeSpamTrash: true },
  // });

  // 휴지통 비움
  mailInTrash = await axios.get(getUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { q: "in:trash", includeSpamTrash: true },
  });

  if (mailInTrash.data.messages) {
    do {
      mailInTrash = await axios.get(getUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { q: "in:trash", includeSpamTrash: true },
      });
      if (!mailInTrash.data.resultSizeEstimate > 0) break;

      const messagesInTrash = mailInTrash.data.messages;

      const deleteMail = (id) => {
        return axios.create({
          baseURL: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/untrash`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      };

      messagesInTrash.forEach(async (message, index) => {
        setTimeout(async () => {
          count += 1;
          console.log(`Removing ${message.id}`);
          await deleteMail(message.id).post();
        }, 500 * (index + 1));
      });

      mailInTrashAfterClear = await axios.get(getUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { q: "in:trash", includeSpamTrash: true },
      });
    } while (mailInTrashAfterClear.data.resultSizeEstimate > 0);
  }

  return count;
};

module.exports = { untrashMail };

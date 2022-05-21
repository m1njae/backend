// const gmail = require("gmail-js");
const { google } = require("googleapis");
const gmail = google.gmail("v1");
const axios = require("axios");
const qs = require("qs");

// const params = { search:{keyword:"안녕"} };
// axios.get("http://api.com", {params});

// // http://api.com?search[keyword]=안녕

const test = async () => {
  const getUrl = `https://gmail.googleapis.com/gmail/v1/users/me/messages`;

  const token =
    "ya29.a0ARrdaM9cZ_vHoTnWWfq-buOGSLB8gwW8hwXQ721D_2XbMKPNGo_N8dT9uJokyBpO1XmJbNaLDofb4B4j6mU5LUPGszHyuN9ZYEVWQDMNaRanDObsCkch722bBdgl4pS7bnRci25gOUm12pAHnqrw9OrlUzSv";
  // after:2014/01/01 before:2014/02/01

  const data = await axios.get(getUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: { q: "in:trash", includeSpamTrash: true },
  });

  const messages = data.data.messages;

  const deleteMail = (id) => {
    return axios.create({
      baseURL: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/untrash`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  messages.map(async (message) => {
    console.log(`Removing ${message.id}`);
    await deleteMail(message.id).post();
  });

  return data.data.messages;
};

module.exports = { test };

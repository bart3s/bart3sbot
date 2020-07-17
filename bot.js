const tmi = require('tmi.js');

const opts = {
  identity: {
    username: 'bart3s',
    password: 'oauth:bf2i9nu8h1jae3eehziqvl7bja8kxv'
  },
  channels: [
    'bart3s'
  ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

function onMessageHandler (target, context, msg, self) {
  if (self) { return; }

  const commandName = msg.trim();

  if (commandName.startsWith("!tts ")) {
    message = commandName.substring(4)
    if (message.startsWith('david: ') || message.startsWith('neil: ')) {
      client.say(target, `${context['display-name']} your message is added to the queue.`);
    } else {
      client.say(target, `${context['display-name']} wrong message format!`);
    }
  }
}

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

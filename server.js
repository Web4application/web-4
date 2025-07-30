const mqtt = require('mqtt');

const connectToMQTT = () => {
  const client = mqtt.connect('wss://pf-f8i70zck04uhfsacjqga.cedalo.cloud:443/mqtt');

  client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('machine_topic', (err) => {
      if (!err) {
        console.log('Subscribed to machine_topic');
        // Send example message after subscription
        sendMQTTMessage('machine_topic', 'Hello from Web4!');
      }
    });
  });

  client.on('message', (topic, message) => {
    console.log(`Received message on topic ${topic}:`, message.toString());
  });

  client.on('error', (err) => {
    console.error('MQTT Error:', err);
  });

  const sendMQTTMessage = (topic, message) => {
    client.publish(topic, message);
    console.log(`Message sent to topic ${topic}: ${message}`);
  };
};

connectToMQTT();

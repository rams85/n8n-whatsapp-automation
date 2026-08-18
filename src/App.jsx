import { useState } from 'react';

function App() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [messageId, setMessageId] = useState('');

  const handleSend = async () => {
    // Clear previous result
    setStatus('');
    setMessageId('');

    try {
      const response = await fetch(
        'http://localhost:5678/webhook-test/whatsapp-send',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone,
            message,
          }),
        }
      );

      const data = await response.json();

      console.log('n8n response:', data);

      if (data.success) {
        setStatus('WhatsApp message sent successfully!');
        setMessageId(data.messageId);
      } else {
        setStatus('Message failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Could not connect to n8n');
    }
  };

  return (
    <div className="app">
      <h1>WhatsApp Message Automation</h1>

      <div className="form">
        <label>Recipient WhatsApp Number</label>

        <input
          type="text"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Message</label>

        <textarea
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
        />

        <button onClick={handleSend}>
          Send Test Message
        </button>

        {status && (
          <div className="status">
            <p>{status}</p>

            {messageId && (
              <small>
                Message ID: {messageId}
              </small>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
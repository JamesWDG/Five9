"use client";
import React, { useState, useRef, useEffect } from 'react';
const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        const greetingMessages = [
          "Hey! I'm Sarah from Five 9 👋 Need help with our IT services?",
          "Hi there! Welcome to Five 9 😊 How can I assist you today?",
          "Hello! I'm here to help with any questions about Five 9's services!"
        ];
        const randomGreeting = greetingMessages[Math.floor(Math.random() * greetingMessages.length)];
        setMessages([{
          id: Date.now(),
          text: randomGreeting,
          sender: 'bot'
        }]);
      }, 800);
    }, 13000);
    return () => clearTimeout(timer);
  }, []);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = async (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      const greetings = [
        "Hey there! 👋 I see you're checking out Five 9. I'm Sarah from the team - how can I help you today?",
        "Hi! Welcome to Five 9's website. I'm here to answer any questions about our IT services. What brings you here?",
        "Hello! Thanks for visiting our site. I'm one of the Five 9 consultants - what would you like to know about our services?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offerings')) {
      return "Great question! We're basically your IT lifeline 😊 We do everything from cloud migrations and security audits to being your part-time CTO. Our main thing is keeping businesses running smoothly - we actually guarantee 99.999% uptime. What kind of IT challenges are you facing?";
    }
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('budget')) {
      return "Ah, the million-dollar question! 💰 Honestly, it really depends on what you need. We work with startups on tight budgets and also handle enterprise-level stuff. I'd love to understand your situation better - what size is your team and what kind of IT support are you looking for?";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "Sure thing! You can reach our team at +1 877 853 4839 or shoot us an email at hello@five9.com. We're based in Colorado (8310 S. Valley Highway Suite 300) but work with clients all over. Want me to have someone call you back?";
    }
    if (lowerMessage.includes('security') || lowerMessage.includes('cyber') || lowerMessage.includes('protection')) {
      return "Security is HUGE right now! 🔒 We're seeing so many businesses get hit with ransomware and data breaches. We do everything from vulnerability assessments to 24/7 monitoring. Have you had any security incidents recently, or are you just being proactive?";
    }
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning')) {
      return "AI is everywhere these days! 🤖 We help businesses actually USE AI instead of just talking about it. Think automating repetitive tasks, better data insights, smarter decision-making. Are you looking to implement AI in a specific area of your business?";
    }
    if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('azure')) {
      return "Cloud migration can be a game-changer! ☁️ We've moved hundreds of companies to the cloud - AWS, Azure, you name it. The best part? Our HaaS solution means you basically never go down. Are you currently on-premise or looking to switch cloud providers?";
    }
    if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('assistance')) {
      return "We're here 24/7! 🕐 Seriously, our team monitors systems around the clock. Whether it's 3 AM on a Sunday or during your busiest day, we've got your back. What kind of support issues are you dealing with right now?";
    }
    if (lowerMessage.includes('uptime') || lowerMessage.includes('availability') || lowerMessage.includes('downtime')) {
      return "99.999% uptime - that's our promise! 📈 It sounds crazy but we actually deliver on it. That's less than 5 minutes of downtime per YEAR. We've built our whole reputation on keeping businesses running. How critical is uptime for your operations?";
    }
    if (lowerMessage.includes('consult') || lowerMessage.includes('advisory') || lowerMessage.includes('strategy')) {
      return "Strategy is where we really shine! 💡 A lot of companies are just throwing money at tech without a real plan. We help you figure out what actually makes sense for YOUR business. Are you planning any major tech initiatives or just need someone to review your current setup?";
    }
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who are you')) {
      return "We started Five 9 back in 2014 because we were tired of seeing businesses suffer from IT disasters! 🚀 The name comes from 'Five Nines' - that 99.999% uptime I mentioned. We're in 35+ markets now with a 90% retention rate. Pretty proud of that! What made you curious about our story?";
    }
    if (lowerMessage.includes('capabilit') || lowerMessage.includes('expertise') || lowerMessage.includes('skills')) {
      return "We're pretty much full-stack IT! 🛠️ Security, cloud, AI, digital transformation, infrastructure - if it plugs in or connects to the internet, we probably work with it. Our sweet spot is being the IT department for companies that don't want to hire a whole team. What's your biggest IT headache right now?";
    }
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're so welcome! 😊 That's what we're here for. Feel free to ask anything else - I love talking about this stuff!";
    }
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see you')) {
      return "Take care! 👋 If you think of any other questions, just hop back on here. Or give us a call at +1 877 853 4839 - we'd love to chat more about how we can help your business!";
    }
    const defaultResponses = [
      "Hmm, I want to make sure I give you the right info! Can you tell me a bit more about what you're looking for? Are you interested in our security services, cloud solutions, or something else?",
      "I'm here to help! 😊 What specific aspect of Five 9's services caught your attention? I can dive deeper into anything on our site.",
      "That's a great question! Let me understand better - are you dealing with any particular IT challenges right now, or just exploring options?",
      "I'd love to help you out! What's your biggest IT concern these days? Downtime? Security? Just need someone reliable to handle the tech stuff?"
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setTimeout(async () => {
      const aiResponse = await getAIResponse(inputMessage);
      const botMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, Math.random() * 1000 + 500);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return (
    <>
      <div
        className={`chat-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa-solid fa-times"></i>
        ) : (
          <i className="fa-solid fa-comments"></i>
        )}
      </div>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">
              <i className="fa-solid fa-robot"></i>
            </div>
            <div>
              <h4>Five 9 AI Assistant</h4>
              <span className="online-status">Online</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="close-chat">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-time">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button onClick={handleSendMessage} className="send-btn">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;
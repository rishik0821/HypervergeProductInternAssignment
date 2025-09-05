import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [voiceAssistant, setVoiceAssistant] = useState(false);
  const [language, setLanguage] = useState("english");

  const WelcomeScreen = () => (
    <div className="screen">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "0%" }}></div>
      </div>

      {/* Voice Assistant Toggle */}
      <div className="voice-toggle">
        <button
          className={`voice-btn ${voiceAssistant ? "active" : ""}`}
          onClick={() => setVoiceAssistant(!voiceAssistant)}
        >
          Voice Guide: {voiceAssistant ? "ON" : "OFF"}
        </button>
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="hindi">हिंदी</option>
          <option value="bengali">বাংলা</option>
          <option value="tamil">தமிழ்</option>
        </select>
      </div>

      {voiceAssistant && (
        <div className="ai-assistant">
          <div className="ai-avatar"></div>
          <div className="ai-message">
            "नमस्ते! मैं आपकी KYC प्रक्रिया में मदद करूंगा। चलिए शुरू करते हैं!"
          </div>
        </div>
      )}

      <h1>SecureKYC</h1>
      <p className="subtitle">
        Complete your identity verification in under 2 minutes
      </p>

      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <div className="icon-circle security"></div>
          </div>
          <span className="feature-text">Bank-grade Security</span>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <div className="icon-circle speed"></div>
          </div>
          <span className="feature-text">Works in Low Network</span>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <div className="icon-circle language"></div>
          </div>
          <span className="feature-text">AI Voice Assistant</span>
        </div>
      </div>

      {/* New: Multiple Access Options */}
      <div className="access-options">
        <h3>Choose Your Preferred Method:</h3>
        <button
          className="primary-btn"
          onClick={() => setCurrentScreen("documents")}
        >
          Continue with App
        </button>
        <button
          className="whatsapp-btn"
          onClick={() => setCurrentScreen("whatsapp")}
        >
          <span className="whatsapp-icon">💬</span>
          Start with WhatsApp
          <span className="popular-badge">Most Popular</span>
        </button>
      </div>

      <div className="trust-badges">
        <div className="trust-badge">
          <div className="badge-dot"></div>
          <span>AI Powered</span>
        </div>
        <div className="trust-badge">
          <div className="badge-dot"></div>
          <span>RBI Compliant</span>
        </div>
        <div className="trust-badge">
          <div className="badge-dot"></div>
          <span>400M+ WhatsApp Users</span>
        </div>
      </div>
    </div>
  );

  // New WhatsApp Screen
  const WhatsAppScreen = () => (
    <div className="screen">
      <div class="progress-bar">
        <div class="progress-fill" style={{ width: "25%" }}></div>
      </div>

      <h2>WhatsApp-Based KYC</h2>
      <p className="subtitle">
        Start verification through familiar WhatsApp chat
      </p>

      {voiceAssistant && (
        <div className="ai-assistant">
          <div className="ai-avatar"></div>
          <div className="ai-message">
            "WhatsApp पर आपका KYC बहुत आसान है! बस फोटो भेजें।"
          </div>
        </div>
      )}

      <div className="whatsapp-demo">
        <div className="phone-mockup">
          <div className="whatsapp-header">
            <span className="whatsapp-icon">💬</span>
            <span>SecureKYC Assistant</span>
            <span className="online-status">● Online</span>
          </div>

          <div className="chat-messages">
            <div className="ai-message-bubble">
              <strong>AI Assistant</strong>
              <p>
                "नमस्ते! आपका KYC शुरू करने के लिए अपना आधार कार्ड की फोटो
                भेजें"
              </p>
              <span className="timestamp">Just now</span>
            </div>

            <div className="user-message-bubble">
              <p>📸 [Aadhaar Photo Uploaded]</p>
              <span className="timestamp">Just now</span>
            </div>

            <div className="ai-message-bubble">
              <strong>AI Assistant</strong>
              <p>"Perfect! Quality check: ✅ Good lighting ✅ Clear image"</p>
              <p>"अब चेहरा सत्यापन के लिए नीचे का लिंक क्लिक करें"</p>
              <span className="timestamp">Just now</span>
            </div>
          </div>

          <div className="secure-handoff">
            <button
              className="secure-btn"
              onClick={() => setCurrentScreen("upload")}
            >
              🔒 Complete Secure Verification
            </button>
          </div>
        </div>
      </div>

      <div className="whatsapp-benefits">
        <h3>Why WhatsApp KYC?</h3>
        <div className="benefit-list">
          <div className="benefit-item">
            <span className="benefit-icon">🚫</span>
            <span>No app download needed</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📱</span>
            <span>Works on basic smartphones</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🌐</span>
            <span>Familiar interface - 400M+ users</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">⚡</span>
            <span>Leverages WhatsApp's offline queuing</span>
          </div>
        </div>
      </div>

      <button className="back-btn" onClick={() => setCurrentScreen("welcome")}>
        ← Back to Options
      </button>
    </div>
  );

  // Keep all your existing screens (DocumentScreen, UploadScreen, SuccessScreen) exactly the same...
  // [Rest of your existing code...]

  const DocumentScreen = () => (
    <div className="screen">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "33%" }}></div>
      </div>

      {voiceAssistant && (
        <div className="ai-assistant">
          <div className="ai-avatar"></div>
          <div className="ai-message">
            "कोई भी एक दस्तावेज़ चुनें। आधार कार्ड सबसे तेज़ है!"
          </div>
        </div>
      )}

      <h2>Select Document</h2>
      <p className="subtitle">Choose any government ID for verification</p>

      <div className="document-options">
        <div className="doc-option" onClick={() => setCurrentScreen("upload")}>
          <div className="doc-info">
            <div className="doc-icon aadhaar">A</div>
            <div className="doc-details">
              <span className="doc-name">Aadhaar Card</span>
              <span className="doc-speed">⚡ Fastest verification</span>
            </div>
          </div>
          <button className="doc-select-btn">Select</button>
        </div>

        <div className="doc-option" onClick={() => setCurrentScreen("upload")}>
          <div className="doc-info">
            <div className="doc-icon pan">P</div>
            <div className="doc-details">
              <span className="doc-name">PAN Card</span>
              <span className="doc-speed">⭐ Most reliable</span>
            </div>
          </div>
          <button className="doc-select-btn">Select</button>
        </div>

        <div className="doc-option" onClick={() => setCurrentScreen("upload")}>
          <div className="doc-info">
            <div className="doc-icon dl">DL</div>
            <div className="doc-details">
              <span className="doc-name">Driving License</span>
              <span className="doc-speed">✓ Good option</span>
            </div>
          </div>
          <button className="doc-select-btn">Select</button>
        </div>
      </div>

      <button className="back-btn" onClick={() => setCurrentScreen("welcome")}>
        ← Back to Home
      </button>
    </div>
  );

  const UploadScreen = () => (
    <div className="screen">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "66%" }}></div>
      </div>

      {voiceAssistant && (
        <div className="ai-assistant">
          <div className="ai-avatar"></div>
          <div className="ai-message">
            "दस्तावेज़ को सीधा रखें और अच्छी रोशनी में फोटो लें!"
          </div>
        </div>
      )}

      <h2>Capture Document</h2>
      <p className="subtitle">Position your document within the frame</p>

      <div className="ai-quality-check">
        <div className="quality-indicator">
          <span className="quality-status checking">
            📊 AI Quality Check: Ready
          </span>
          <div className="quality-tips">
            <div className="tip">✓ Good lighting detected</div>
            <div className="tip">⚠️ Hold camera steady</div>
            <div className="tip">✓ Document area clear</div>
          </div>
        </div>
      </div>

      <div className="upload-area">
        <div className="camera-preview">
          <div className="camera-placeholder">
            <div className="camera-icon-professional"></div>
            <div className="camera-text">AI-powered quality detection</div>
          </div>
        </div>

        <button
          className="primary-btn"
          onClick={() => setCurrentScreen("success")}
        >
          Capture with AI Enhancement
        </button>
        <button className="secondary-btn">Choose from Gallery</button>
      </div>

      <button
        className="back-btn"
        onClick={() => setCurrentScreen("documents")}
      >
        ← Back to Documents
      </button>
    </div>
  );

  const SuccessScreen = () => (
    <div className="screen">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: "100%" }}></div>
      </div>

      <div className="success-content">
        <div className="success-icon"></div>
        <h2>Verification Complete!</h2>
        <p className="subtitle">Your identity has been successfully verified</p>

        {voiceAssistant && (
          <div className="ai-assistant">
            <div className="ai-avatar"></div>
            <div className="ai-message">
              "बधाई हो! आपका KYC सफलतापूर्वक पूरा हो गया है।"
            </div>
          </div>
        )}

        <div className="verification-details">
          <div className="detail-item">
            <span>Document Type:</span>
            <span>Aadhaar Card</span>
          </div>
          <div className="detail-item">
            <span>Verification Time:</span>
            <span>1.2 seconds</span>
          </div>
          <div className="detail-item">
            <span>Confidence Score:</span>
            <span>99.7%</span>
          </div>
        </div>

        <button
          className="primary-btn"
          onClick={() => setCurrentScreen("welcome")}
        >
          Start New Verification
        </button>
      </div>
    </div>
  );

  return (
    <div className="App">
      {currentScreen === "welcome" && <WelcomeScreen />}
      {currentScreen === "whatsapp" && <WhatsAppScreen />}
      {currentScreen === "documents" && <DocumentScreen />}
      {currentScreen === "upload" && <UploadScreen />}
      {currentScreen === "success" && <SuccessScreen />}
    </div>
  );
}

export default App;

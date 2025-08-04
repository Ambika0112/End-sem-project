# Translation API Setup Guide

## 🌐 API-Based Translation System

This system uses real translation APIs to provide dynamic translations for your website.

### 📋 Available APIs

#### 1. Google Translate API (Recommended)
- **Cost**: $20 per 1M characters
- **Accuracy**: Very high
- **Setup**: Requires API key

#### 2. LibreTranslate API (Free)
- **Cost**: Free
- **Accuracy**: Good
- **Setup**: No API key required

### 🔧 Setup Instructions

#### Option 1: Google Translate API (Recommended)

1. **Get API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable "Cloud Translation API"
   - Create credentials (API Key)

2. **Update Configuration**:
   ```javascript
   // In cursorjavascript.js, update:
   GOOGLE_API_KEY: 'YOUR_ACTUAL_API_KEY_HERE'
   ```

#### Option 2: LibreTranslate API (Free)

1. **No setup required** - works out of the box
2. **Rate limits**: 10 requests per minute
3. **Languages**: Supports 100+ languages

### 🚀 How It Works

1. **User clicks language option**
2. **System tries Google Translate first**
3. **If Google fails, tries LibreTranslate**
4. **If both fail, uses static fallback**
5. **Results are cached for performance**

### 📊 Features

- ✅ **Real-time translation** from APIs
- ✅ **Translation caching** for speed
- ✅ **Fallback system** if APIs fail
- ✅ **Loading indicators** during translation
- ✅ **Error handling** with static fallback
- ✅ **Supports 100+ languages**

### 🔒 Security Notes

- **Google API Key**: Keep it secure, don't expose in client-side code
- **Rate Limits**: Be aware of API usage limits
- **CORS**: APIs must support cross-origin requests

### 💡 Usage Tips

1. **For production**: Use Google Translate API for accuracy
2. **For development**: LibreTranslate is free and sufficient
3. **For offline**: Static translations work without internet
4. **For performance**: Caching reduces API calls

### 🛠️ Customization

You can easily add more APIs by:
1. Adding new API function
2. Updating the translation chain
3. Adding new language codes

### 📝 Example Usage

```javascript
// The system automatically handles:
// 1. API calls
// 2. Error handling
// 3. Caching
// 4. Fallbacks

// Just click a language and it works!
```

### 🌍 Supported Languages

- English (en)
- Hindi (hi)
- Tamil (ta)
- Telugu (te)
- Bengali (bn)
- Marathi (mr)
- Gujarati (gu)
- And 100+ more via APIs! 
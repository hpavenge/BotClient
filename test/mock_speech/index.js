class MockSpeechRecognizer {
    constructor() {
        this.locale = "en-US";
        this.isStreamingToService = false;
        this.referenceGrammarId = "mock";
        this.onIntermediateResult = null;
        this.onFinalResult = null;
        this.onAudioStreamingToService = null;
        this.onRecognitionFailed = null;
    }
    warmup() { }
    startRecognizing() {
        // This will advance to Listening_Start state from Listening_Starting
        if (this.onAudioStreamingToService) {
            this.onAudioStreamingToService();
        }
    }
    stopRecognizing() { }
    speechIsAvailable() {
        return true;
    }
}
class MockSpeechSynthesizer {
    speak(text, lang, onSpeakingStarted, onspeakingFinished) { }
    stopSpeaking() { }
}
//# sourceMappingURL=index.js.map
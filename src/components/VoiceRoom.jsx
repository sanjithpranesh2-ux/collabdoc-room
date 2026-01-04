import { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import {
  AgoraRTCProvider,
  useJoin,
  useLocalMicrophoneTrack,
  useRemoteUsers,
  usePublish
} from "agora-rtc-react";

// Create Agora client
const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

function VoiceChatInner() {
  const [calling, setCalling] = useState(false);

  // 🎤 Local mic
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(calling);

  // 🚪 Join channel
  useJoin(
    {
      appid: "161ad5133c9045ac92e07b16d06711b3",
      channel: "main-room",
      token: null,
    },
    calling
  );

  // 📡 Publish mic
  usePublish(calling ? [localMicrophoneTrack] : []);

  // 👥 Remote users
  const remoteUsers = useRemoteUsers();

  // 🔊 Play remote audio
  const playRemoteAudio = () => {
    remoteUsers.forEach(user => {
      if (user.audioTrack) {
        user.audioTrack.play();
      }
    });
  };

  // ✅ Auto-play when users join (AND after user action)
  useEffect(() => {
    if (calling) {
      playRemoteAudio();
    }
  }, [remoteUsers, calling]);

  return (
    <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Voice Room</h2>

      <button
        onClick={() => {
          setCalling(prev => !prev);
          setTimeout(() => {
            playRemoteAudio();
          }, 500);
        }}
        style={{
          backgroundColor: calling ? "#ff4d4d" : "#4CAF50",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
      >
        {calling ? "Leave Voice Chat" : "Join Voice Chat"}
      </button>

      {calling && (
        <p style={{ color: "#4CAF50", marginTop: 10 }}>
          ● Mic is LIVE
        </p>
      )}

      <p style={{ marginTop: 10 }}>
        Users connected: {remoteUsers.length + (calling ? 1 : 0)}
      </p>
    </div>
  );
}

export default function VoiceRoom() {
  return (
    <AgoraRTCProvider client={client}>
      <VoiceChatInner />
    </AgoraRTCProvider>
  );
}

"use client";
import axios from "axios";
import React, { useState } from "react";

const apiUrl = "http://localhost:3001";

const PingPage = () => {
  const [message, setMessage] = useState("");
  const [screenshotStatus, setScreenshotStatus] = useState("");

  const fetchMessage = async () => {
    const response = await axios.get(apiUrl + "/ping");
    setMessage(response.data.message);
  };

  const captureScreenshot = async () => {
    try {
      setScreenshotStatus("스크린샷 캡처 중...");

      if (typeof window !== "undefined" && window.electron) {
        const result = await window.electron.captureScreen("test");

        if (result.success) {
          setScreenshotStatus(`스크린샷이 저장되었습니다: ${result.filename}`);
          console.log(result);
        } else {
          setScreenshotStatus(`오류: ${result.error}`);
        }
      } else {
        setScreenshotStatus("Electron 환경에서만 사용 가능합니다.");
      }
    } catch (error) {
      setScreenshotStatus(
        `스크린샷 캡처 실패: ${
          error instanceof Error ? error.message : "알 수 없는 오류"
        }`
      );
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <div className="space-y-4">
        <button
          onClick={fetchMessage}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Message
        </button>

        <h1 className="text-lg font-semibold">{message}</h1>

        <button
          onClick={captureScreenshot}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          스크린샷
        </button>

        {screenshotStatus && (
          <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
            {screenshotStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default PingPage;

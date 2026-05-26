import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold mb-4">
            DramaFlow Publisher
          </h1>
          <p className="text-slate-600 mb-6">
            Cloudflare 测试部署版已启动。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="rounded-xl bg-black text-white px-5 py-3">
              登录测试
            </button>
            <button className="rounded-xl bg-red-600 text-white px-5 py-3">
              YouTube 频道授权
            </button>
            <button className="rounded-xl bg-slate-200 text-slate-800 px-5 py-3">
              进入发布后台
            </button>
          </div>

          <div className="mt-8 border rounded-xl p-5 bg-slate-50">
            <h2 className="font-semibold mb-2">当前状态</h2>
            <p>前端页面正常加载，下一步可接入 Google OAuth 和 YouTube API。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

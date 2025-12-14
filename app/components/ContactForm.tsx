"use client";

import { Send } from "lucide-react";
import styles from "../style/ContactForm.module.css";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <form className={styles.contactForm}>
      <label>
        <h3>이메일</h3>
        <div className="flex w-full items-center gap-3">
          <input
            type="text"
            name=""
            className="w-4/10"
            placeholder="이메일을 입력해주세요"
            required
          />
          <span>@</span>
          <input
            type="text"
            name=""
            className="w-4/10"
            value={email}
            placeholder="입력"
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            className="w-2/10"
            onChange={(e) => setEmail(() => e.target.value)}
          >
            <option value="">직접입력</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
          </select>
        </div>
      </label>

      <label>
        <h3>제목</h3>
        <input
          type="text"
          name=""
          className="w-full"
          placeholder="제목을 입력해주세요"
          required
        />
      </label>
      <label className="w-full">
        <h3>내용</h3>
        <textarea
          name=""
          className="w-full"
          placeholder="내용을 입력해주세요"
          required
        />
      </label>

      <button type="submit">
        전송 <Send size={16} />
      </button>
    </form>
  );
}

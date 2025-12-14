import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">연락하기</h2>
        <h4 className="text-lg font-semibold text-gray-600">
          더 궁금하신 내용은 <u>codingsung@gmail.com</u>에 연락해주세요
        </h4>
      </div>
      <ContactForm />
    </div>
  );
}

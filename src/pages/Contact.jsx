import PageWrapper from "../components/PageWrapper";

function Contact() {
  return (
    <PageWrapper>
      <div className="pt-28 max-w-4xl mx-auto text-center glass neon-border p-8 rounded-xl">
        <h1 className="text-4xl text-blue-400 mb-6">
          Contact Technova
        </h1>

        <p>Email: technova@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: XYZ Engineering College</p>
      </div>
    </PageWrapper>
  );
}

export default Contact;
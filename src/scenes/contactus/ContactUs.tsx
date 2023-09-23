import SectionHeader from "@/shared/components/SectionHeader";
import contactImg from "@/assets/ContactUsPageGraphic.webp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().min(3, { message: "Minimum Length is 3 Chars" }),
  email: z.string().min(1, { message: "Email Is Required" }),
  message: z.string().min(20, { message: "Minimum Length is 20 Chars" }),
});
type FormData = z.infer<typeof schema>;
type Props = {
  addRef: (el: HTMLElement) => void;
};
const ContactUs = ({ addRef }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };
  const inputStyle =
    "p-2 rounded-md text-white bg-primary-500 placeholder:text-white min-w-[200px] outline-primary-300 caret-primary-300 focus:placeholder:opacity-0";
  return (
    <section
      ref={addRef}
      id="contactus"
      className="section-padding custom-container"
    >
      <SectionHeader
        paragraph="Congue adipiscing risus commodo placerat.
         Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque.
         Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis."
      >
        <span className="text-primary-500">join now</span> to get in shape
      </SectionHeader>
      <div className="flex items-center md:flex-row flex-col-reverse justify-center lg:justify-stretch gap-8 mt-12">
        <form
          className="flex flex-col justify-center gap-2 flex-1"
          onSubmit={handleSubmit(onSubmit)}
          target="_blank"
          action="https://formsubmit.co/ar.48.salam@gmail.com"
          method="POST"
        >
          <input
            {...register("name")}
            name="name"
            type="text"
            placeholder="Name"
            className={`${inputStyle}`}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            {...register("email")}
            name="email"
            type="text"
            placeholder="Email"
            className={`${inputStyle}`}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <textarea
            {...register("message")}
            cols={30}
            rows={4}
            name="message"
            placeholder="Message"
            className={`${inputStyle} resize-none`}
          />
          {errors.message && <p>{errors.message.message}</p>}
          <button
            className="rounded-md bg-secondary-500 hover:bg-primary-500 transition duration-300 md:px-10 px-3 py-2
           hover:text-white w-fit mx-auto md:mx-0"
          >
            Submit
          </button>
        </form>
        <div className="">
          <img src={contactImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

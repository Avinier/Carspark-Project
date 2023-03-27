import { useEffect } from "react";

const ReviewPage = () => {
  useEffect(() => {
    async function signIn() {
      userToken;
    }
  });
  return (
    <div className=" bg-purple-700">
      <h2 className="font-black text-[4rem] text-center">
        What customers are saying
      </h2>
      <form className="mx-auto w-fit flex flex-col">
        <textarea
          className="bg-slate-50 rounded-lg w-[500px] h-[200px] p-[10px] m-[20px]"
          placeholder="write your review..."
        ></textarea>
        <button className="bg-purple-100 p-[15px] w-[40%] mx-auto rounded-lg font-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;

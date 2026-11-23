import Image from "next/image";
import HelloWorld from "./HelloWorld";
import Comment from "./Comment";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Comment
          name={authourObj.name}
          avatarUrl={authourObj.avatarUrl}
          text="Great Article!"
          date="Oct 28"
        />
        
      </main>
    </div>
  );
}
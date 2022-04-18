export const faqs = [
    {
      question: "Difference between authorization and authentication ?",
      answer:
        "Context Api প্রতিটি স্তরে ম্যানুয়ালি প্রপস ডাউন না করেই উপাদান ট্রির মাধ্যমে ডেটা পাস করার একটি উপায় সরবরাহ করে। একটি সাধারণ রিঅ্যাক্ট অ্যাপ্লিকেশনে, প্রপসের মাধ্যমে ডেটা টপ-ডাউন  পাস করা হয়, কিন্তু এই ধরনের ব্যবহার নির্দিষ্ট ধরনের প্রপসের জন্য কষ্টকর হতে পারে । Context api অ্যাপ্লিকেশনে প্রতিটি স্তরের মধ্য দিয়ে স্পষ্টভাবে একটি প্রপ পাস না করে উপাদানগুলির মধ্যে এই জাতীয় মানগুলি ভাগ করার একটি উপায় সরবরাহ করে। Context API আমাদের prop drilling থেকে দূরে রাখে । এর মাধ্যমে আমারা যেকনো data যেকনো child এর কাছে পাঠাতে পারি । সুতরাং বলা যায় আমাদের যদি এমন কোন state , data ইত্যাদি মা আমাদের সোকল application এর page এ প্রয়োজন হয় তাহলে context API আমাদের সাহায্য করবে । etc",
    },
    {
      question: "Why are you using firebase? What other options do you have to implement authentication ?",
      answer:
        "একটি Semantic Element হলো কোড এর একটি উপাদান যা সেই উপাদানটির ভিতরে কি রয়েছে তা ইস্পষ্ট ভাবে উপস্থাপন করতে শব্দ ব্যবহার করা হয় মানুষের ভাষায় । HTML এ কিছু Semantic Element হলো article , detail , figure , footer , header , main etc .",
    },
    {
      question: "What other services does firebase provide other than authentication ?",
      answer:
        "দুটি display value আছে: ব্লক এবং ইনলাইন |একটি lock-level element সর্বদা একটি নতুন লাইনে শুরু হয় এবং browsers automatically উপাদানের আগে এবং পরে কিছু space or একটি মার্জিন যোগ করে। একটি ব্লক-স্তরের উপাদান সর্বদা  takes up the full width ,যতদূর সম্ভব বাম এবং ডানদিকে প্রসারিত হয় exjampole , <p> , <div> | একটি inline element একটি নতুন লাইন শুরু হয় না. একটি ইনলাইন উপাদান শুধুমাত্র প্রয়োজনীয় যতটা space  নেয়। exjample , span , button, a",
    },
  ];
"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        seturl("")
        setshortUrl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-violet-200 my-16 rounded-lg p-8 flex flex-col gap-4 ">
      <h1 className="font-bold font-code text-2xl">
        Generate your short URLs{" "}
      </h1>
      <div className="flex flex-col gap-3">
        <input
          className="px-4 py-2 focus:outline-purple-500 rounded-md"
          value={url}
          type="text"
          placeholder="Enter your URl "
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        <input
          className="px-4 py-2 focus:outline-purple-500 rounded-md"
          value={shortUrl}
          type="text"
          placeholder="Enter your prefered your short URL text "
          onChange={(e) => {
            setshortUrl(e.target.value);
          }}
        />
        <button
          className=" my-3  bg-purple-600 hover:bg-violet-600 text-white rounded-lg p-2 font-bold font-sora "
          onClick={generate}
        >
          Generate
        </button>
      </div>
      {generated &&<>
       <span className="font-bold text-green-800 font-sora text-lg"> Your Link:</span> <code>  <Link target="_blank" href={generated}>{generated}</Link>
        </code>
        </>
        }
    </div>
  );
};


export default Shorten;
import Nweet from "components/Nweet";
import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
  // console.log(userObj);
  const [nweets, setNweets] = useState([]);

  // const getNweets = async () => {
  //   const dbnweets = await dbService.collection("nweets").get();
  //   dbnweets.forEach((document) => {
  //     const nweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //       creatorId: userObj.uid,
  //     };
  //     setNweets((prev) => [nweetObject, ...prev]);
  //   });
  // }; //구식..
  useEffect(() => {
    // getNweets();
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;

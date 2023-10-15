import React from "react";
import Issues from "./Issues";
import Abstract from "./Abstract";

import journalIssues from '../../data/journalIssues.json'
import journalAbstract from '../../data/journalAbstract.json'


const JournalIssues = () => {
  return (
    <>
      <Issues data={journalIssues} />
      <Abstract data={journalAbstract} />
    </>
  );
};

export default JournalIssues;

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { IJobs, Months } from "../typings";
import linkedin from "../assets/linkedin.webp";
import www from "../assets/www.webp";

interface IJobsProps {
  jobs: IJobs[];
}

export const Jobs: NextPage<IJobsProps> = ({ jobs }) => {
  return (
    <>
      <h1 className="jobs_heading">Alur Pembelajaran</h1>
      <div className="jobs_timeline_container">
          <div className="job">
            <h3>Konsep Sistem Operasi Jaringan</h3>
          </div>
          <div className="job">
              <h3>NTP Server</h3>
          </div>
          <div className="job">
              <h3>FTP Server</h3>
          </div>
          <div className="job">
              <h3>DNS Server</h3>
          </div>
          <div className="job">
              <h3>Web Server</h3>
          </div>
          <div className="job">
              <h3>Basis Data Server</h3>
          </div>
          <div className="job">
              <h3>Mail Server</h3>
          </div>
      </div>
    </>
  );
};

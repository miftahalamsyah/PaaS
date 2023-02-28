import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { ISkills } from "../typings";
import type { NextPage } from "next";
import React from "react";

const Materi: NextPage<GetStaticProps> = () => {
    return (
        <>
            <h1 className="jobs_heading">Alur Pembelajaran</h1>
            <div className="jobs_timeline_container">
                <div className="job">
                    <h3>Konsep Sistem Operasi Jaringan</h3>
                    <h4></h4>
                </div>
            </div>
        </>
    )
}
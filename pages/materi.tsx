import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

const Materi: NextPage<GetStaticProps> = () => {
    return (
        <>
            <h1 className="jobs_heading">Alur Pembelajaran</h1>
            <div className="jobs_timeline_container">
                <div className="job">
                    <h3>Konsep Sistem Operasi Jaringan</h3>
                </div>
            </div>
        </>
    )
}
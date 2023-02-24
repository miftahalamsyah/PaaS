import type { NextPage } from "next";
import { ISkills } from "../typings";
import { Skill } from "./Skill";
import React from "react";
interface ISKillsProps {
  skills: ISkills[];
}

export const Skills: NextPage<ISKillsProps> = ({ skills }) => {
  const languages = skills?.filter(skill => skill?.fieldType?.toLowerCase()=== "languages" && skill?.proficient == true);
  const familiar = skills?.filter(skill => skill?.proficient === false);

  return (
    <>
        <div className="box">
            <h1 className="skills_heading">Games</h1>
            <div className="contact_email">
                <p >Gimana sudah paham materinya? yuk coba games 🎮 berikut :</p>
            </div>
            <div className="skills_box">

            </div>
            <div className="skills_email2">

            </div>
            <div className="contact_email">
                <p >Selanjutnya ada games implementasi array dua dimensi 🎮 berikut :</p>
            </div>
            <div className="skills_box">

            </div>
        </div>
    </>
  );
};
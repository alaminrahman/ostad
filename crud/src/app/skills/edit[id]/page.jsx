'use client'
import { insertSkills } from "@/utils/api";
import { Skills } from "@/components/skills";
import { useState, useEffect } from "react";

export default function EditSkill(id) {

    const [id, setId] = useState('');

  return (
    <>

      <input 
        type="text" 
        placeholder="Type here" 
        name="skill"
        className="input input-bordered w-full max-w-xs" />

      <button className="btn">Update</button>
    
    </>
  )
}

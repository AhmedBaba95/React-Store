import { useState } from "react"

export function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    function handleSubmit() {

    }

    return (
        <>
            <h1>Contacts Us Below</h1>
            <input onChange={(e) => e.target.value} placeholder="Name"/>
            <input onChange={(e) => e.target.value} placeholder="Email"/>
            <input onChange={(e) => e.target.value} placeholder="Question/Comment"/>
            <button onClick={() => handleSubmit()}>Submit</button>
        </>
    )
}
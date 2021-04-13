let users = []



export const getUsers = (req,res) => {
    console.log("im in getusers")
    res.send(users)
}

export const createUser = (req,res) => {
    console.log("im in createusers")
    res.send("ok...")
}
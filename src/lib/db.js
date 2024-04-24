const {username,password} = process.env
export const connectionStr ="mongodb+srv://"+username+":"+password+"@cluster0.8hfknpv.mongodb.net/productB?retryWrites=true&w=majority&appName=Cluster0"
 const NavHandler = async (req, res) => {
    try {
        const response = await fetch('https://smartlock-user.onrender.com/noon/navbar');
        const data = await response.json();
        console.log("Navbar api data is here: ", data)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
}
export default NavHandler;
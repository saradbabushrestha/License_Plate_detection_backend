const UserServices = require('../services/user.service');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if email is already registered
        const existingUser = await UserServices.getUserByEmail(email);
        if (existingUser) {
            throw new Error(`Email ${email} is already registered`);
        }
        // Register the user
        const newUser = await UserServices.registerUser(email, password);

        res.status(201).json({ status: true, message: 'User registered successfully' });
    } catch (error) {
        console.log("Error during registration:", error);
        next(error); // Pass error to the error handling middleware
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email || !password) {
            throw new Error('Email and password are required');
        }

        // Check if user exists
        const user = await UserServices.checkUser(email);
        if (!user) {
            throw new Error('User does not exist');
        }

        // Check if password is correct
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            throw new Error('Incorrect password');
        }

        // Generate access token
        const tokenData = { _id: user._id, email: user.email };
        const token = await UserServices.generateAccessToken(tokenData, "secret", "1h");

        res.status(200).json({ status: true, message: "Login successful", token: token });
    } catch (error) {
        console.log("Error during login:", error);
        next(error); // Pass error to the error handling middleware
    }
}

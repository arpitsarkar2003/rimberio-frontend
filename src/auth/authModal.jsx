import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const toggleAuthMode = () => setIsLogin(!isLogin);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateRegistration = () => {
        const { password, confirmPassword } = formData;
        const newErrors = {};
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic here
            console.log('Logging in:', formData);
        } else {
            // Validate registration form
            if (validateRegistration()) {
                // Handle registration logic here
                console.log('Registering:', formData);
            }
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="relative w-full max-w-md mx-auto animate-slide-up">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full relative">
                    <button
                        className="absolute top-2 right-2 text-red-500"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                    <h2 className="text-xl font-semibold mb-4">
                        {isLogin ? 'Login' : 'Register'}
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <div>
                                    <label className="block mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </>
                        )}
                        <div>
                            <label className="block mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter password"
                            />
                        </div>
                        {!isLogin && (
                            <div>
                                <label className="block mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded"
                                    placeholder="Confirm password"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                                )}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-2 rounded mt-2"
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                    </form>

                    <div className="text-center mt-4">
                        <p>
                            {isLogin
                                ? "Don't have an account?"
                                : 'Already have an account?'}{' '}
                            <button
                                onClick={toggleAuthMode}
                                className="text-purple-600 hover:underline"
                            >
                                {isLogin ? 'Register' : 'Login'}
                            </button>
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="text-center mb-2">Or continue with</p>
                        <div className="flex justify-center space-x-4">
                            <button className="border px-4 py-2 rounded">Google</button>
                            <button className="border px-4 py-2 rounded">Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;

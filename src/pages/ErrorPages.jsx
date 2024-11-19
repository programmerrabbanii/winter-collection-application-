import React from "react";
import notFound from "../assets/errror.jpg"; 
import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div style={styles.container}>
            <img src={notFound} alt="Error Page" style={styles.image} />
            <h1 style={styles.title}>Oops! Page Not Found</h1>
            <p style={styles.message}>
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/">Go To Home</Link>
        </div>
    ); 
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f9fa"
    },
    image: {
        maxWidth: "500px",
        width: "100%",
        height: "auto",
        marginBottom: "20px"
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px"
    },
    message: {
        fontSize: "1rem",
        color: "#666",
        marginBottom: "20px"
    },
    button: {
        padding: "10px 20px",
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        textDecoration: "none"
    }
};

export default ErrorPages;

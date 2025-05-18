import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/Admin/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
        <p className="text-gray-500 mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-primary hover:bg-primary-600"
        >
          Voltar ao Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
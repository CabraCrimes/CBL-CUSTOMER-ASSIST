import React, { useState, useContext, useEffect } from "react";
import { HelpGuide } from "../../component/help_guide"; 

export const CustomerHelpGuide = () => {
    
    return (
        <main className="bd-main order-1">
           <div className="bd-intro">
                <div className="border-bottom mb-4 mt-3">
                    <h1>Help Guide</h1>
                </div>
                <div>
                    <HelpGuide />
                </div>
                
            </div>
        </main>
    );
};

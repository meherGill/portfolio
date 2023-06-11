import React, { useEffect, useState, useRef } from "react";

export default ({ text, indexes }: { text: string[]; indexes: number[] }) => {
    const indexRef = useRef(1);
    const [textToDisplay, setTextToDisplay] = useState(text[0]);
    const intervalRef = useRef<any>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);

    const setIntervalAgain = () => {
        setAnimationToSpin();
        intervalRef.current = setInterval(() => {
            setTextToDisplay((textToDisplay) => {
                let potentialNewLine = "";
                if (indexes.includes(indexRef.current)) {
                    potentialNewLine = "\n\n";
                }
                const newText = `${textToDisplay}${potentialNewLine}${
                    text[indexRef.current]
                }`;
                indexRef.current++;
                return newText;
            });
        }, 50);
    };

    const clearIntervalAgain = () => {
        if (cursorRef.current) clearInterval(intervalRef.current);
    };

    const setAnimationToBounce = () => {
        cursorRef.current?.classList.add("animate-cursorblink");
    };

    const setAnimationToSpin = () => {
        cursorRef.current?.classList.remove("animate-cursorblink");
    };
    useEffect(() => {
        setIntervalAgain();
        return () => {
            if (!intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (textToDisplay.length >= text.length + 2 * (indexes.length - 1)) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            setAnimationToBounce();
        } else if (indexes.includes(indexRef.current)) {
            clearIntervalAgain();
            setAnimationToBounce();
            setTimeout(() => {
                setIntervalAgain();
            }, 1000);
        }
    }, [textToDisplay]);

    return (
        <h2 className="font-['Press_Start_2P'] whitespace-pre-wrap">
            {textToDisplay}
            <span
                ref={cursorRef}
                className={`bg-gray-100 h-5 w-2 inline-block ml-2`}
            ></span>
        </h2>
    );
};

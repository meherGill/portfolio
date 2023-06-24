import React, { useEffect, useMemo } from "react";
import "./FlipCard.css";

export default ({ id, children }: { id: string; children: any }) => {
    const cardRef = React.useRef<any>(null);

    useEffect(() => {
        (cardRef.current as HTMLElement).addEventListener("mouseenter", () => {
            console.log("hover");
        });

        (cardRef.current as HTMLElement).addEventListener("mouseleave", () => {
            console.log("hover off");
        });

        const counterPartCardRef = (function () {
            const splitted_id = id.split("-");
            if (splitted_id.includes("copy")) {
                const index = splitted_id.indexOf("copy");
                splitted_id[index] = "main";
            } else {
                const index = splitted_id.indexOf("main");
                splitted_id[index] = "copy";
                console.log(splitted_id.join("-"));
            }
            const idOfOtherCard = splitted_id.join("-");
            return document.getElementById(idOfOtherCard);
        })();
        console.log("for id", id, counterPartCardRef);
    }, []);
    return (
        <div id={id} ref={cardRef} className="card">
            <div className="card__content">
                <div className="card__front"></div>

                <div className="card__back"></div>
            </div>
        </div>
    );
};

// <style lang="scss">
//     :root {
//         --level-one: translateZ(3rem);
//         --level-two: translateZ(6rem);
//         --level-three: translateZ(9rem);

//         --fw-normal: 400;
//         --fw-bold: 700;

//         --clr: #b7c9e5;
//     }

//     *,
//     *::before,
//     *::after {
//         box-sizing: border-box;
//         margin: 0;
//     }

//     .card {
//         width: 400px;
//     }

//     .card__content {
//         text-align: center;
//         position: relative;
//         padding: 15em 5em;
//         transition: transform 3s;
//         // background: pink;
//         transform-style: preserve-3d;
//     }

//     .card:hover .card__content {
//         transform: rotateY(0.5turn);
//     }

//     .card__front,
//     .card__back {
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         left: 0;
//         right: 0;
//         backface-visibility: hidden;
//         transform-style: preserve-3d;
//         display: grid;
//         align-content: center;
//     }

//     .card__front {
//         background: red;
//     }

//     .card__back {
//         transform: rotateY(0.5turn);
//         color: var(--clr);
//         background: #333;
//     }

//     .card__title {
//         font-size: 3.5rem;
//         transform: var(--level-three);
//         order: 2;
//         text-transform: uppercase;
//     }
// </style>

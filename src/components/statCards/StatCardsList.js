import React, {useState, useEffect} from "react"
import StatCards from "./StatCards"
import SpecialRuleCards from "./SpecialRuleCards"
import API from "../../modules/ApiManager"

const StatCardsList = props => {
    const[orcStatCards, setOrcStatCards] =useState([])
    const[orcSpecialRules, setOrcSpecialRules]=useState([])
    const[empireStatCards, setEmpireStatCards]=useState([])

    const getOrcStatCards = (str, int) =>{
        return API.getWithArmyId(str, int).then(statCardsFromAPI =>{
            setOrcStatCards(statCardsFromAPI)
        })
    }
    const getOrcSpecialRules = (str, int) =>{
        return API.getWithArmyId(str, int).then(specialRulesFromAPI =>{
            setOrcSpecialRules(specialRulesFromAPI)
        })
    }

    const getEmpireStatCards = (str, int) =>{
        return API.getWithArmyId(str, int).then(statCardsFromAPI =>{
            setEmpireStatCards(statCardsFromAPI)
        })
    }

    useEffect(() => {
        getOrcStatCards("statCards", 1)
        getOrcSpecialRules("specialRules", 1)
        getEmpireStatCards("statCards", 2)
    }, [])
    return (
        <div>
        <div><h1>List of Units</h1>
        <div className="container-cards">
            <h2>Orcs and Goblins</h2>
            {orcStatCards.map(statCard => (
                <StatCards
                key={statCard.id}
                statCard={statCard}
                {...props}
                />
            ))}
        </div>
        <div className="container-cards">
                <h2>Empire</h2>
            {empireStatCards.map(statCard => (
                <StatCards
                key={statCard.id}
                statCard={statCard}
                {...props}
                />
            ))}

        </div>
        </div>
        <div><h1>List of Special Rules</h1>
                <div className="container-cards">
                    <h2>Orcs and Goblins</h2>
                    {orcSpecialRules.map(specialRule =>(
                        <SpecialRuleCards
                        key={specialRule.id}
                        specialRule={specialRule}
                        {...props}
                        />
                    ))}
                </div>
        </div>
        </div>
    )
}
export default StatCardsList
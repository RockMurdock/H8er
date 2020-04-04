const apiURL = "http://localhost:5002/";

const API = {
  getWithId(str, userId) {
    return fetch(apiURL + str + "?userId=" + userId).then(entries =>
      entries.json()
    );
  },
  getWithArmyId(str, armyTypeId) {
    return fetch(apiURL + str +"/?armyTypeId=" + armyTypeId).then(entries =>
      entries.json()
    );
  },
  getSpecialRule(statCardId){
    return fetch(apiURL + "statCardRules/?statCardId=" + statCardId + "&_expand=specialRule").then(entries =>
        entries.json()
      );
  },
  get(str) {
    return fetch(apiURL + str).then(entries => entries.json());
  },
  save(objToSave, str) {
    return fetch(apiURL + str, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objToSave)
    });
  },
  delete(objToDeleteId, str) {
    return fetch(`${apiURL}${str}/${objToDeleteId}`, {
      method: "DELETE"
    });
  },
  edit(objToEditId, str) {
    return fetch(apiURL + str + "/" + objToEditId).then(entry => entry.json());
  },
  update(objToEdit, str) {
    return fetch(`${apiURL}${str}/${objToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objToEdit)
    });
  },
  expand(str, toExpand) {
    return fetch(`${apiURL}${str}/?_expand=${toExpand}`).then(entries =>
      entries.json()
    );
  },
  embed(str, toExpand) {
    return fetch(`${apiURL}${str}/?_embed=${toExpand}`).then(entries =>
      entries.json()
    );
  },
  embedWithId(str, toExpand, id) {
    return fetch(`${apiURL}${str}/${id}/?_embed=${toExpand}`).then(entries =>
      entries.json()
    );
  },
  specialWithArmyType(str, armyTypeId) {
    return fetch(`${apiURL}${str}/?armyTypeId=${armyTypeId}`).then(entries =>
      entries.json()
    );
  },
  getStatCardsWithArmyId(armyId) {
      return fetch(`${apiURL}armyStatCards/?armyId=${armyId}&_expand=statCard`).then(entries =>
        entries.json()
      )
  },
  getRuleDescription(specialRuleId) {
    return fetch(`${apiURL}specialRules/?id=${specialRuleId}`).then(entries =>
      entries.json()
    )
  },
  getRulesByStatCard(statCardId){
    return fetch(`${apiURL}statCardRules/?statCardId=${statCardId}&_expand=specialRule`).then(entries =>
      entries.json())
  }
};
export default API;

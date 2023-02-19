const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    "Description": String,
    "DescriptionShort": String,
    "MedicalCondition": String,
    "Name": String,
    "PossibleSymptoms": String,
    "ProfName": String,
    "Synonyms": String,
    "TreatmentDescription": String,
    "id": Number,
})

module.exports=mongoose.model('Issues',Schema);

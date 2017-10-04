import React from 'react';

const RsvpResp = (final) => {
console.log(final);

final.map((val, i) => {
    console.log(val);
})


}

export default RsvpResp;

let data =
{
    DietaryRequirements : "",
    SongLink: "",
    Responses: [
            {
            GuestId: "",
            Response: true,
            },
            {

            },
    ]
}
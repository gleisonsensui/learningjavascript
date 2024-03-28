"use strict";
// Requisições HTTP

// API Fetch
// Fetch GET
fetch('url',  {method: 'GET'}); // Nesse caso não é necessário preencher dados de body ou headers

// Fetch POST
fetch('url', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: '01', name: 'bic', description: 'caneta esferográfica'})})

// Fetch PUT
fetch('url', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: '01', name: 'bic', description: 'caneta esferográfica'})})

// Fetch PATCH
fetch('url', {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: '01', name: 'bic', description: 'caneta esferográfica'})})
























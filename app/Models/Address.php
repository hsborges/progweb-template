<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'client_id', 'street', 'country', 'state', 'street_number', 'complement', 'neighborhood', 'cep'
    ];

}

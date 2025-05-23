/*https://convertlive.com/pt/u/converter/metros-de-newton/em/quilograma-for%C3%A7a-metros#135*/
const listaCarros = [
    {
        carro: 'byd dolphin mini 4 lugares',
        motor: 'elétrico',
        autonomia_inmetro: '280 km',
        torque_nm: '135 Nm',
        torque_kgfm: '13,7 kgfm',
        velocidade_maxima: '130 km/h',
        aceleracao_0_100: '14,9 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (40 kW)',
        bateria: '38 kWh',
        potencia: '75 cv',
        preco_site: 'R$118.800',
        link: 'https://www.byd.com/br/car/dolphin-mini',
    },
    {
        carro: 'byd dolphin mini 5 lugares',
        motor: 'elétrico',
        autonomia_inmetro: '280 km',
        torque_nm: '135 Nm',
        torque_kgfm: '13,7 kgfm',
        velocidade_maxima: '130 km/h',
        aceleracao_0_100: '14,9 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (40 kW)',
        bateria: '38 kWh',
        potencia: '75 cv',
        preco_site: 'R$122.800',
        link: 'https://www.byd.com/br/car/dolphin-mini',
    },
    {
        carro: 'byd dolphin',
        motor: 'elétrico',
        autonomia_inmetro: '291 km',
        torque_nm: '180 Nm',
        torque_kgfm: '18,3 kgfm',
        velocidade_maxima: '160 km/h',
        aceleracao_0_100: '10,9 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (60 kW)',
        bateria: '44,9 kWh',
        potencia: '95 cv',
        preco_site: 'R$159.800',
        link: 'https://www.byd.com/br/car/dolphin',
    },
    {
        carro: 'byd dolphin plus',
        motor: 'elétrico',
        autonomia_inmetro: '330 km',
        torque_nm: '310 Nm',
        torque_kgfm: '31,6 kgfm',
        velocidade_maxima: '160 km/h',
        aceleracao_0_100: '7 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (80 kW)',
        bateria: '60,48 kWh',
        potencia: '204 cv',
        preco_site: 'R$184.800',
        link: 'https://www.byd.com/br/car/dolphin-plus',
    },
    {
        carro: 'byd han',
        motor: 'elétrico',
        autonomia_inmetro: '349 km',
        torque_nm: '700 Nm',
        torque_kgfm: '71,3 kgfm',
        velocidade_maxima: '186 km/h',
        aceleracao_0_100: '3,9 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 48 minutos (120 kW)',
        bateria: '85,4 kWh',
        potencia: '517 cv',
        preco_site: 'R$559.800',
        link: 'https://www.byd.com/br/car/han',
    },
    {
        carro: 'byd seal',
        motor: 'elétrico',
        autonomia_inmetro: '372 km',
        torque_nm: '590 Nm',
        torque_kgfm: '60,1 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '3,8 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (150 kW)',
        bateria: '82,56 kWh',
        potencia: '531 cv',
        preco_site: 'R$299.800',
        link: 'https://www.byd.com/br/car/seal',
    },
    {
        carro: 'byd tan',
        motor: 'elétrico',
        autonomia_inmetro: '430 km',
        torque_nm: '700 Nm',
        torque_kgfm: '71,3 kgfm',
        velocidade_maxima: '190 km/h',
        aceleracao_0_100: '4,9 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (110 kW)',
        bateria: '108,8 kWh',
        potencia: '517 cv',
        preco_site: 'R$536.800',
        link: 'https://www.byd.com/br/car/tan',
    },
    {
        carro: 'byd yuan plus',
        motor: 'elétrico',
        autonomia_inmetro: '294 km',
        torque_nm: '310 Nm',
        torque_kgfm: '31,6 kgfm',
        velocidade_maxima: '160 km/h',
        aceleracao_0_100: '7,3 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (80 kw)',
        bateria: '60,48 kWh',
        potencia: '204 cv',
        preco_site: 'R$235.800',
        link: 'https://www.byd.com/br/car/yuan-plus',
    },
    {
        carro: 'byd yuan pro',
        motor: 'elétrico',
        autonomia_inmetro: '250 km',
        torque_nm: '290 Nm',
        torque_kgfm: '29,5 kgfm',
        velocidade_maxima: '160 km/h',
        aceleracao_0_100: '7,9 segundos',
        tempo_de_carregamento_ac: 'não localizado no site da montadora',
        tempo_de_carregamento_dc: '30% a 80% em 29 minutos (60 kW)',
        bateria: '45,1 kWh',
        potencia: '177 cv',
        preco_site: 'R$182.800',
        link: 'https://www.byd.com/br/car/yuan-pro',
    },
    {
        carro: 'gwm ora 3 skin',
        motor: 'elétrico',
        autonomia_inmetro: '232 km',
        torque_nm: '250 Nm',
        torque_kgfm: '25,5 kgfm',
        velocidade_maxima: '160 km/h',
        aceleracao_0_100: '8,2 segundos',
        tempo_de_carregamento_ac: '15% a 100% em 3 horas (11 kW)',
        tempo_de_carregamento_dc: '30% a 80% em 30 minutos (64 kW)',
        bateria: '48 kWh',
        potencia: '171 cv',
        preco_site: 'R$169.000',
        link: 'https://www.gwmmotors.com.br/pt/modelos/ora-03-skin',
    },
    {
        carro: 'gwm ora 3 gt',
        motor: 'elétrico',
        autonomia_inmetro: '319 km',
        torque_nm: '250 Nm',
        torque_kgfm: '25,5 kgfm',
        velocidade_maxima: '160 km/h',
        aceleracao_0_100: '8,2 segundos',
        tempo_de_carregamento_ac: '15% a 100% em 5 horas (11 kW)',
        tempo_de_carregamento_dc: '30% a 80% em 40 minutos (67 kW)',
        bateria: '63 kWh',
        potencia: '171 cv',
        preco_site: 'R$199.000',
        link: 'https://www.gwmmotors.com.br/pt/modelos/ora-03-gt',
    },
    {
        carro: 'omoda-e5',
        motor: 'elétrico',
        autonomia_inmetro: '345 km',
        torque_nm: '340 Nm',
        torque_kgfm: '34,6 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '-- segundos',
        tempo_de_carregamento_ac: '--',
        tempo_de_carregamento_dc: '--',
        bateria: '61,1 kWh',
        potencia: '204 cv',
        preco_site: 'sob consulta',
        link: 'https://omodajaecoo.com.br/omoda-e5',
    },
    {
        carro: 'caoachery icar',
        motor: 'elétrico',
        autonomia_inmetro: '197 km',
        torque_nm: '150 Nm',
        torque_kgfm: '15,3 kgfm',
        velocidade_maxima: '100 km/h',
        aceleracao_0_100: '12,8 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 11 horas (220v)',
        tempo_de_carregamento_dc: '80% em 36 minutos (50 kWh)',
        bateria: '30,8 kWh',
        potencia: '61 cv',
        preco_site: 'R$119.990',
        link: 'https://caoachery.com.br/icar',
    },
    {
        carro: 'renault kwid e-tech',
        motor: 'elétrico',
        autonomia_inmetro: '185 km',
        torque_nm: '113 Nm',
        torque_kgfm: '11,5 kgfm',
        velocidade_maxima: '130 km/h',
        aceleracao_0_100: '14,6 segundos',
        tempo_de_carregamento_ac: `
    <br>15% a 80% em 2 horas e 54 minutos (7,4 kW) ou<br> 
    8 horas e 57 minutos (2,2 kW)
    `,
        tempo_de_carregamento_dc: '15% a 80% 40 minutos (30 kW)',
        bateria: '26,8 kWh',
        potencia: '65 cv',
        preco_site: 'R$139.990',
        link: 'https://www.renault.com.br/veiculos-eletricos/kwid-etech.html',
    },
    {
        carro: 'renault megane e-tech',
        motor: 'elétrico',
        autonomia_inmetro: '337 km',
        torque_nm: '301 Nm',
        torque_kgfm: '30,6 kgfm',
        velocidade_maxima: '160 km/h',
        aceleracao_0_100: '7,4 segundos',
        tempo_de_carregamento_ac: `
    <br>15% a 80% em 1 hora e 50 minutos (22 kW) ou<br>
    4 horas e 10 minutos (11 kW) ou<br>
    6 horas e 1 minuto (7 kW)
    `,
        tempo_de_carregamento_dc: '15% a 80% em 36 minutos (130 kW)',
        bateria: '60 kWh',
        potencia: '220 cv',
        preco_site: 'R$279.900',
        link: 'https://www.renault.com.br/veiculos-eletricos/megane-e-tech.html',
    },
    {
        carro: 'peugeot e-2008',
        motor: 'elétrico',
        autonomia_inmetro: '261 km',
        torque_nm: '260 Nm',
        torque_kgfm: '26,5 kgfm',
        velocidade_maxima: '150 km/h',
        aceleracao_0_100: '8,9 segundos',
        tempo_de_carregamento_ac: `
    <br>0 a 80% em 6 horas e 2 minutos (7 kw - 22 kW) ou<br>
    24 horas e 56 minutos (tomada 220v)`,
        tempo_de_carregamento_dc: `
    <br>0 a 80% em 30 minutos (100 kW) ou<br>
    53 minutos (50 kw)
    `,
        bateria: '54 kWh',
        potencia: '158 cv',
        preco_site: 'R$259.990',
        link: 'https://carros.peugeot.com.br/gama/peugeot-e2008.html',
    },
    {
        carro: 'volvo ex30 single motor',
        motor: 'elétrico',
        autonomia_inmetro: '250 km',
        torque_nm: '343 Nm',
        torque_kgfm: '34,9 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '5,7 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 6 horas (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 26 minutos (150 kW)',
        bateria: '51 kWh',
        potencia: '272 cv',
        preco_site: 'R$229.950',
        link: 'https://www.volvocars.com/br/cars/ex30-electric/',
    },
    {
        carro: 'volvo ex30 single motor extended range',
        motor: 'elétrico',
        autonomia_inmetro: '338 km',
        torque_nm: '343 Nm',
        torque_kgfm: '34,9 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '5,3 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 8 horas (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 28 minutos (150 kW)',
        bateria: '69 kWh',
        potencia: '272 cv',
        preco_site: 'R$269.950',
        link: 'https://www.volvocars.com/br/cars/ex30-electric/',
    },
    {
        carro: 'volvo ex40 single motor',
        motor: 'elétrico',
        autonomia_inmetro: '364 km',
        torque_nm: '420 Nm',
        torque_kgfm: '42,8 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '7,3 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 7 horas (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 27 minutos (150 kW)',
        bateria: '70 kWh',
        potencia: '238 cv',
        preco_site: 'R$329.950',
        link: 'https://www.volvocars.com/br/cars/ex40-electric/',
    },
    {
        carro: 'volvo ex40 twin motor',
        motor: 'elétrico',
        autonomia_inmetro: '393 km',
        torque_nm: '670 Nm',
        torque_kgfm: '68,3 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '4,8 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 8 horas (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 34 minutos (150 kW)',
        bateria: '82 kWh',
        potencia: '408 cv',
        preco_site: 'R$379.950',
        link: 'https://www.volvocars.com/br/cars/ex40-electric/',
    },
    {
        carro: 'volvo ec40 single motor',
        motor: 'elétrico',
        autonomia_inmetro: '385 km',
        torque_nm: '420 Nm',
        torque_kgfm: '42,8 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '7,3 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 7 horas (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 27 minutos (150 kW)',
        bateria: '70 kWh',
        potencia: '238 cv',
        preco_site: 'R$334.950',
        link: 'https://www.volvocars.com/br/cars/ec40-electric/',
    },
    {
        carro: 'volvo ec40 twin motor',
        motor: 'elétrico',
        autonomia_inmetro: '404 km',
        torque_nm: '670 Nm',
        torque_kgfm: '68,3 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '4,7 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 8 horas (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 34 minutos (150 kW)',
        bateria: '82 kWh',
        potencia: '408 cv',
        preco_site: 'R$384.950',
        link: 'https://www.volvocars.com/br/cars/ec40-electric/',
    },
    {
        carro: 'volvo ex90',
        motor: 'elétrico',
        autonomia_inmetro: '459 km',
        torque_nm: '910 Nm',
        torque_kgfm: '92,7 kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '4,9 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 10 horas (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 30 minutos (250 kW)',
        bateria: '111 kWh',
        potencia: '517 cv',
        preco_site: 'R$849.950',
        link: 'https://www.volvocars.com/br/cars/ex90-electric/',
    },
    {
        carro: 'bmw ix xdrive50 sport',
        motor: 'elétrico',
        autonomia_inmetro: '528 km',
        torque_nm: '765 Nm',
        torque_kgfm: '78 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '4,6 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '-- ( kW)',
        bateria: '-- kWh',
        potencia: '523 cv',
        preco_site: 'R$923.950',
        link: 'https://www.bmw.com.br/pt/all-models/bmw-i/bmw-ix/2021/bmw-ix.html#carregamento',
    },
    {
        carro: 'bmw ix xdrive40',
        motor: 'elétrico',
        autonomia_inmetro: '327 km',
        torque_nm: '630 Nm',
        torque_kgfm: '64,2 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '6,1 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '-- ( kW)',
        bateria: '-- kWh',
        potencia: '326 cv',
        preco_site: 'R$726.950',
        link: 'https://www.bmw.com.br/pt/all-models/bmw-i/bmw-ix/2021/bmw-ix.html#carregamento',
    },
    {
        carro: 'bmw ix m60',
        motor: 'elétrico',
        autonomia_inmetro: '431 km',
        torque_nm: '1015-1100 Nm',
        torque_kgfm: '103,5-112,17 kgfm',
        velocidade_maxima: '250 km/h',
        aceleracao_0_100: '3,8 segundos',
        tempo_de_carregamento_ac: '5 horas e 30 minutos em uma BMW Wallbox (22 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 49 minutos (100 kW)',
        bateria: ' kWh',
        potencia: '540-619 cv',
        preco_site: 'R$1.143.950',
        link: 'https://www.bmw.com.br/pt/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-destaques.html',
    },
    {
        carro: 'bmw i7 xdrive60 m sport',
        motor: 'elétrico',
        autonomia_inmetro: '479 km',
        torque_nm: '745 Nm',
        torque_kgfm: '75,9 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '4,7 segundos',
        tempo_de_carregamento_ac: '10 horas e 30 minutos em BMW Wallbox (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 34 minutos (195 kW)',
        bateria: '-- kWh',
        potencia: '544 cv',
        preco_site: 'R$1.372.950',
        link: 'https://www.bmw.com.br/pt/all-models/bmw-i/i7/2022/bmw-i7-sedan-highlights.html',
    },
    {
        carro: 'bmw i4 edrive 40 m sport gran coupé',
        motor: 'elétrico',
        autonomia_inmetro: '590 km',
        torque_nm: '-- Nm',
        torque_kgfm: '-- kgfm',
        velocidade_maxima: '190 km/h',
        aceleracao_0_100: '5,6 segundos',
        tempo_de_carregamento_ac: '8 horas e 30 minutos em BMW Wallbox (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 30 minutos (205 kW)',
        bateria: '-- kWh',
        potencia: '250 cv',
        preco_site: 'R$581.950',
        link: 'https://www.bmw.com.br/pt/all-models/bmw-i/i4/bmw-i4-gran-coupe.html',
    },
    {
        carro: 'bmw i4 m50 xdrive gran coupé',
        motor: 'elétrico',
        autonomia_inmetro: '416-520 km',
        torque_nm: '-- Nm',
        torque_kgfm: '-- kgfm',
        velocidade_maxima: '225 km/h',
        aceleracao_0_100: '3,9 segundos',
        tempo_de_carregamento_ac: '8 horas e 30 minutos em BMW Wallbox (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 30 minutos (205 kW)',
        bateria: '-- kWh',
        potencia: '544 cv',
        preco_site: 'R$674.950',
        link: 'https://www.bmw.com.br/pt/all-models/m-series/bmw-i4-m50/bmw-i4-m50-xdrive-gran-coupe.html',
    },
    {
        carro: 'bmw ix3 m sport',
        motor: 'elétrico',
        autonomia_inmetro: '381 km',
        torque_nm: '400 Nm',
        torque_kgfm: '40,7 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '6,8 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '-- ( kW)',
        bateria: '-- kWh',
        potencia: '286 cv',
        preco_site: 'R$519.950',
        link: 'https://www.bmw.com.br/pt/all-models/serie-x/iX3/2021/bmw-ix3-destaques.html',
    },
    {
        carro: 'bmw ix2',
        motor: 'elétrico',
        autonomia_inmetro: '337 km',
        torque_nm: ' Nm',
        torque_kgfm: ' kgfm',
        velocidade_maxima: '180 km/h',
        aceleracao_0_100: '5,6 segundos',
        tempo_de_carregamento_ac: `
    6 horas e 30 minutos - 3 horas e 45 minutos <br> 
    em BMW Wallbox (11 kW - 22 kW)
    `,
        tempo_de_carregamento_dc: '10% a 80% em 30 minutos (130 kW)',
        bateria: '64,8 kWh',
        potencia: '306-313 cv',
        preco_site: 'R$463.950',
        link: 'https://www.bmw.com.br/pt/all-models/bmw-i/ix2/bmw-ix2-overview.html#dados-tecnicos',
    },
    {
        carro: 'bmw ix1 xdrive30 m sport',
        motor: 'elétrico',
        autonomia_inmetro: '303 km',
        torque_nm: '494 Nm',
        torque_kgfm: '50,3 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '5,6 segundos',
        tempo_de_carregamento_ac: '6 horas e 30 minutos em BMW Wallbox (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 38 minutos (100 kW)',
        bateria: '-- kWh',
        potencia: '272-313 cv',
        preco_site: 'R$362.950',
        link: 'https://www.bmw.com.br/pt/all-models/bmw-i/iX1/2022/bmw-ix1-destaques.html',
    },
    {
        carro: 'bmw ix1 edrive20 x-line',
        motor: 'elétrico',
        autonomia_inmetro: '332 km',
        torque_nm: '250 Nm',
        torque_kgfm: '25,4 kgfm',
        velocidade_maxima: ' km/h',
        aceleracao_0_100: '8,6 segundos',
        tempo_de_carregamento_ac: '6 horas e 30 minutos em BMW Wallbox (11 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 38 minutos (100 kW)',
        bateria: '-- kWh',
        potencia: '204 cv',
        preco_site: 'R$362.950',
        link: 'https://www.bmw.com.br/pt/all-models/bmw-i/iX1/2022/bmw-ix1-destaques.html',
    },
    {
        carro: 'bmw i5 m60',
        motor: 'elétrico',
        autonomia_inmetro: '391 km',
        torque_nm: '-- Nm',
        torque_kgfm: '-- kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '3,8 segundos',
        tempo_de_carregamento_ac: `
    8 horas e 30 minutos - 4 horas e 14 minutos <br> 
    em BMW Wallbox (11 kW - 22 kW)
    `,
        tempo_de_carregamento_dc: '10% a 80% em 30 minutos (205 kW)',
        bateria: '-- kWh',
        potencia: '601 cv',
        preco_site: 'R$794.950',
        link: 'https://www.bmw.com.br/pt/all-models/m-series/bmw-i5-m60/bmwi5-m60-g60bev.html',
    },
    {
        carro: 'audi q6 e-tron',
        motor: 'elétrico',
        autonomia_inmetro: '411 km',
        torque_nm: '-- Nm',
        torque_kgfm: '-- kgfm',
        velocidade_maxima: '210 km/h',
        aceleracao_0_100: '5,9 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '10% a 80% em 21 minutos (270 kW)',
        bateria: '94,9 kWh',
        potencia: '387 cv',
        preco_site: 'R$559.990',
        link: 'https://www.audi.com.br/pt/models/q6-e-tron/q6-e-tron/',
    },
    {
        carro: 'audi q8 e-tron',
        motor: 'elétrico',
        autonomia_inmetro: '357 km',
        torque_nm: '664 Nm',
        torque_kgfm: '67,7 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '5,6 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '10% a 80% em 31 minutos (170 kW)',
        bateria: '114 kWh',
        potencia: '408 cv',
        preco_site: 'sob proposta',
        link: 'https://www.audi.com.br/pt/models/q8-e-tron/q8-e-tron/',
    },
    {
        carro: 'audi q8 sportback e-tron',
        motor: 'elétrico',
        autonomia_inmetro: '362 km',
        torque_nm: '664 Nm',
        torque_kgfm: '67,7 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '5,6 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '10% a 80% em 31 minutos (170 kW)',
        bateria: '114 kWh',
        potencia: '408 cv',
        preco_site: 'sob proposta',
        link: 'https://www.audi.com.br/pt/models/q8-e-tron/q8-sportback-e-tron/',
    },
    {
        carro: 'audi sq8 sportback e-tron',
        motor: 'elétrico',
        autonomia_inmetro: '307 km',
        torque_nm: '973 Nm',
        torque_kgfm: '99,2 kgfm',
        velocidade_maxima: '210 km/h',
        aceleracao_0_100: '4,5 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '10% a 80% em 31 minutos (170 kW)',
        bateria: '114 kWh',
        potencia: '502 cv',
        preco_site: 'sob proposta',
        link: 'https://www.audi.com.br/pt/models/q8-e-tron/sq8-sportback-e-tron/',
    },
    {
        carro: 'audi e-tron gt quattro',
        motor: 'elétrico',
        autonomia_inmetro: '308 km',
        torque_nm: '640 Nm',
        torque_kgfm: '65,2 kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '4,1 segundos',
        tempo_de_carregamento_ac: '-- (22 kW)',
        tempo_de_carregamento_dc: '-- (270 kW)',
        bateria: '83,7 kWh',
        potencia: '530 cv',
        preco_site: 'sob proposta',
        link: 'https://www.audi.com.br/pt/models/e-tron-gt/audi-e-tron-gt/',
    },
    {
        carro: 'audi rs e-tron gt',
        motor: 'elétrico',
        autonomia_inmetro: '313 km',
        torque_nm: '-- Nm',
        torque_kgfm: '-- kgfm',
        velocidade_maxima: '-- km/h',
        aceleracao_0_100: '3,3 segundos',
        tempo_de_carregamento_ac: '-- ( kW)',
        tempo_de_carregamento_dc: '5% a 80% em 22 minutos e 30 segundos (270 kW)',
        bateria: '-- kWh',
        potencia: '440 cv',
        preco_site: 'sob proposta',
        link: 'https://www.audi.com.br/pt/models/e-tron-gt/audi-rs-e-tron-gt/',
    },
    {
        carro: 'taycan',
        motor: 'elétrico',
        autonomia_inmetro: '-- km',
        torque_nm: '410-420 Nm',
        torque_kgfm: '41,8-42,8 kgfm',
        velocidade_maxima: '230 km/h',
        aceleracao_0_100: '4,8 segundos',
        tempo_de_carregamento_ac: `
    9 horas/11 horas - 5 horas/6 horas (11 kW - 22 kW)
    `,
        tempo_de_carregamento_dc: '10% a 80% em 18 minutos/33 minutos (320 kW/150 kW)',
        bateria: '82,3-105 kWh',
        potencia: '408-435 cv',
        preco_site: 'R$820.000',
        link: 'https://www.porsche.com/brazil/pt/models/taycan/taycan-models/taycan/',
    },
    {
        carro: 'taycan 4s',
        motor: 'elétrico',
        autonomia_inmetro: '415 km',
        torque_nm: '710 Nm',
        torque_kgfm: '72,3 kgfm',
        velocidade_maxima: '250 km/h',
        aceleracao_0_100: '3,7 segundos',
        tempo_de_carregamento_ac: `
    11 horas - 6 horas (11 kW - 22 kW)
    `,
        tempo_de_carregamento_dc: '10% a 80% em 18 minutos/33 minutos (320 kW/150 kW)',
        bateria: '97-105 kWh',
        potencia: '517-598 cv',
        preco_site: 'R$875.000',
        link: 'https://www.porsche.com/brazil/pt/models/taycan/taycan-models/taycan-4s/',
    },
    {
        carro: 'taycan gts',
        motor: 'elétrico',
        autonomia_inmetro: '428 km',
        torque_nm: '790 Nm',
        torque_kgfm: '80,5 kgfm',
        velocidade_maxima: '250 km/h',
        aceleracao_0_100: '3,3 segundos',
        tempo_de_carregamento_ac: `
    11 horas - 6 horas (11 kW - 22 kW)
    `,
        tempo_de_carregamento_dc: '10% a 80% em 18 minutos/33 minutos (320 kW/150 kW)',
        bateria: '97-105 kWh',
        potencia: '605-700 cv',
        preco_site: 'R$1.010.000',
        link: 'https://www.porsche.com/brazil/pt/models/taycan/taycan-models/taycan-gts/',
    },
    {
        carro: 'taycan turbo',
        motor: 'elétrico',
        autonomia_inmetro: '415 km',
        torque_nm: '890 Nm',
        torque_kgfm: '90,7 kgfm',
        velocidade_maxima: '260 km/h',
        aceleracao_0_100: '2,7 segundos',
        tempo_de_carregamento_ac: `
    11 horas - 6 horas (11 kW - 22 kW)
    `,
        tempo_de_carregamento_dc: '10% a 80% em 18 minutos/33 minutos (320 kW/150 kW)',
        bateria: '97-105 kWh',
        potencia: '707-884 cv',
        preco_site: 'R$1.175.000',
        link: 'https://www.porsche.com/brazil/pt/models/taycan/taycan-models/taycan-turbo/',
    },
    {
        carro: 'taycan turbo s',
        motor: 'elétrico',
        autonomia_inmetro: '425 km',
        torque_nm: '1110 Nm',
        torque_kgfm: '113,1 kgfm',
        velocidade_maxima: '260 km/h',
        aceleracao_0_100: '2,4 segundos',
        tempo_de_carregamento_ac: `
    11 horas - 6 horas (11 kW - 22 kW)
    `,
        tempo_de_carregamento_dc: '10% a 80% em 18 minutos/33 minutos (320 kW/150 kW)',
        bateria: '97-105 kWh',
        potencia: '775-952 cv',
        preco_site: 'R$1.435.000',
        link: 'https://www.porsche.com/brazil/pt/models/taycan/taycan-models/taycan-turbo-s/',
    },
    {
        carro: '',
        motor: 'elétrico',
        autonomia_inmetro: ' km',
        torque_nm: ' Nm',
        torque_kgfm: ' kgfm',
        velocidade_maxima: ' km/h',
        aceleracao_0_100: ' segundos',
        tempo_de_carregamento_ac: `
    
    `,
        tempo_de_carregamento_dc: ' ( kW)',
        bateria: ' kWh',
        potencia: ' cv',
        preco_site: 'R$',
        link: '',
    },
    {
        carro: 'jac e-js1',
        motor: 'elétrico',
        autonomia_inmetro: '181km',
        torque_nm: '150Nm',
        torque_kgfm: '15,3 kgfm',
        velocidade_maxima: '110 km/h',
        aceleracao_0_100: '10,7 s',
        tempo_de_carregamento_ac: `
    <br>0 a 80% ac wall box 4 horas e 10 minutos (6 kW) ou<br>
    8 horas e 20 minutos (3 kW)<br>
    20% a 100% ac cabo portátil em 10 horas (3 kW a 6 kW) ou<br>
    0 a 100% ac cabo portátil em 12 horas e 30 minutos (3 kW a 6 kW)
    `,
        tempo_de_carregamento_dc: `
    <br>0 a 100% em 1 hora e 30 minutos (3 kW a 6 kW) ou<br>
    0 a 80% em 1 hora e 15 minutos (3 kW a 6 kW)
    `,
        bateria: '30 kWh',
        potencia: '62 cv',
        preco_site: 'R$132.900',
        link: 'https://www.jacmotors.com.br/veiculos/eletricos-detalhes/e-js1_24_25',
    },
    {
        carro: 'hyundai ioniq 5',
        motor: 'elétrico',
        autonomia_inmetro: '347 km',
        torque_nm: '605 Nm',
        torque_kgfm: '61,6 kgfm',
        velocidade_maxima: '185 km/h',
        aceleracao_0_100: '5,3 segundos',
        tempo_de_carregamento_ac: '10% a 100% em 7 horas e 20 minutos (10,9 kW)',
        tempo_de_carregamento_dc: '10% a 80% em 18 minutos (350 kW)',
        bateria: '84 kWh',
        potencia: '325 cv',
        preco_site: 'R$409.990',
        link: 'https://www.hyundai.com.br/monte-o-seu.html?utm_source=GOOGLE&utm_medium=SEARCH&utm_campaign=HMB_ONGOING_RETAIL_IONIQ_INTENTION_LEADS_2024&utm_content=TEXT_IONIQ_SIGNATURE_PR_394990_SC_IONIQOPN_MSAD&gad_source=1&_gl=1*1sb1zg*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw5azABhD1ARIsAA0WFUGGhOf_I1V2EbXe8cp9F_MVtkLNlrjW6A-afqBZinXXnmLsWpo6n6kaAuIqEALw_wcB&gbraid=0AAAAADxIrKwB84ViTmNFUMW3gQkWWcCGn',
    },
    {
        carro: 'kia ev9',
        motor: 'elétrico',
        autonomia_inmetro: '434 km',
        torque_nm: '700 Nm',
        torque_kgfm: '71,3 kgfm',
        velocidade_maxima: '200 km/h',
        aceleracao_0_100: '5,3 segundos',
        tempo_de_carregamento_ac: '0 a 100% em 9 horas e 45 minutos (11 kW)',
        tempo_de_carregamento_dc: `
    <br>30% a 80% em 24 minutos (carregador de 350 kW) ou<br>
    em 83 minutos (carregador de 50 kW)
    `,
        bateria: '99,8 kWh',
        potencia: '385 cv',
        preco_site: 'R$749.990',
        link: 'https://www.kia.com.br/ev9',
    },
    {
        carro: 'kia ev5',
        motor: 'elétrico',
        autonomia_inmetro: '402km',
        torque_nm: '310 Nm',
        torque_kgfm: '31,6 kgfm',
        velocidade_maxima: '185 km/h',
        aceleracao_0_100: '8,9 segundos',
        tempo_de_carregamento_ac: `
    <br>0 a 100% em 8 horas e 10 minutos (11 kW) ou<br>
    9 horas e 40 minutos (7 kW)
    `,
        tempo_de_carregamento_dc: `
    <br>30% a 80% em 27 minutos (carregador de 360 kW) ou<br>
    em 83 minutos (carregador de 50 kW)
    `,
        bateria: '88,16 kWh',
        potencia: '217,5 cv',
        preco_site: 'R$389.990',
        link: 'https://www.kia.com.br/ev5',
    },
    {
        carro: 'ford mustang mach-e',
        motor: 'elétrico',
        autonomia_inmetro: '379 km',
        torque_nm: '860 Nm',
        torque_kgfm: '87,6 kgfm',
        velocidade_maxima: '200 km/h',
        aceleracao_0_100: '3,7 segundos',
        tempo_de_carregamento_ac: `
    <br>0 a 100% em 11 horas (11 kW) ou<br>
    14 horas (7 kW)`,
        tempo_de_carregamento_dc: '99 km em 10 minutos (150 kW)',
        bateria: '91 kWh',
        potencia: '487 cv',
        preco_site: 'R$486.000',
        link: 'https://www.ford.com.br/performance/mustang-mach-e/?intcmp=vhp-return-similar-interest',
    },
    {
        carro: 'chevrolet blazer ev',
        motor: 'elétrico',
        autonomia_inmetro: '481 km',
        torque_nm: '441 Nm',
        torque_kgfm: '44,9 kgfm',
        velocidade_maxima: '190 km/h',
        aceleracao_0_100: '5,8 segundos',
        tempo_de_carregamento_ac: `
    <br>não localizado no site da montadora (22 kW)`,
        tempo_de_carregamento_dc: '0 a 80% em 40 minutos (190 kW)',
        bateria: '102 kWh',
        potencia: '347 cv',
        preco_site: 'R$503.190',
        link: 'https://www.chevrolet.com.br/eletrico/blazer-ev',
    },
    {
        carro: 'chevrolet equinox ev',
        motor: 'elétrico',
        autonomia_inmetro: '443 km',
        torque_nm: '452 Nm',
        torque_kgfm: '46 kgfm',
        velocidade_maxima: '188 km/h',
        aceleracao_0_100: '5,8 segundos',
        tempo_de_carregamento_ac: `
    <br>não localizado no site da montadora (22 kW)`,
        tempo_de_carregamento_dc: '0 a 80% em 48 minutos (150 kW)',
        bateria: '85 kWh',
        potencia: '292 cv',
        preco_site: 'R$440.190',
        link: 'https://www.chevrolet.com.br/eletrico/equinox-ev',
    },
];
export default listaCarros;

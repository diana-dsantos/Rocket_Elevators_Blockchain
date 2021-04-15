pragma solidity >=0.5.0;

contract MyStringStore {
  int public batteries = 30;
  int public columns = 25;
  int public elevators = 0;
  int public floors = 0;

  int public controllers =0;
  int public shafts =0;
  int public doors =0;
  int public buttons =0;
  int public display =0;

  int public aluminumBars = 0;
  int public aluminumSheets = 0;
  int public stainlessSteelSheets = 0;
  int public springs = 0;
  int public rubberBands =0;
  int public rubberBumpers =0;
  int public lightinLed =0;
  int public displayPanel =0;
  int public manufacturingButtons =0;
  
  
  function setBatteries(int x) public {
    batteries = x;
  }

  function setColumns(int x) public {
    columns = x;
  }

  function setElevators(int x) public {
    elevators = x;
  }

  function setFloors(int x) public {
    floors = x;
  }

  function setControllers(int x) public {
    controllers = x;
  }

  function setShafts(int x) public {
    shafts = x;
  }

  function setDoors(int x) public {
    doors = x;
  }

  function setButtons(int x) public {
    buttons = x;
  }

  function setDisplay(int x) public {
    display = x;
  }

    function setAluminumBars(int x) public {
    aluminumBars = x;
  }

  function setAluminumSheets(int x) public {
    aluminumSheets = x;
  }

  function setStainlessSteelSheets(int x) public {
    stainlessSteelSheets = x;
  }

  function Springs(int x) public {
    springs = x;
  }

  function setRubberBands(int x) public {
    rubberBands = x;
  }

  function setRubberBumpers(int x) public {
    rubberBumpers = x;
  }

  function setLightinLed(int x) public {
    lightinLed = x;
  }

  function setDisplayPanel(int x) public {
    displayPanel = x;
  }

  function setManufacturingButtons(int x) public {
     manufacturingButtons = x;
  }

}
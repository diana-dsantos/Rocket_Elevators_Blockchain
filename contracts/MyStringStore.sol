pragma solidity >=0.5.0;

contract MyStringStore {
  int public batteries = 30;
  int public columns = 25;
  int public elevators = 0;
  int public floors = 0;
  
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
}
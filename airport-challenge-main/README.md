Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```


Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:


#### Acceptance Criteria
```
User Story - 1

As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

#### Domain Model for US-1:


| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |	listOfLandedPlanes | landAPlane(@planeID) | @string |



#### Tests:
 
1. Test that `landAPlane` lands a Plane when instructed



```

User Story - 2

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
#### Domain Model:

| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |	capacity	| changeAirportCapacity(@Number) |	@Number |


#### Tests:
 
1. Test that `changeAirportCapacity` changes capacity of airport

```

User Story - 3

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

#### Domain Model:

| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |		capacity     | landAPlane(@planeID) |	@Error |

#### Tests:
 
1. Test that `landAPlane()` throws an Error if capacity of airport is full.

```

User Story - 4

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```


#### Domain Model:

| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |		listOfLandedPlanes     | takeOffPlane(@PlaneID) |	@String |



#### Tests:

1. 'Take Off a plane which is currently landed in airport and give a confirmation'

```

User Story - 5

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

```

#### Domain Model: 

| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |		listOfLandedPlanes     | takeOffPlane(@PlaneID) |	@String |
| AIRPORT |		listOfLandedPlanes     | landAPlane(@PlaneID) |	@String |

#### Tests:

1. Prevent Take Off for a plane which is NOT currently landed in airport
2. Prevent Landing of a plane which is already landed in airport

```

#### Extended Acceptance Criteria

User Story - 6

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```

#### Domain Model:

| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |	_weather     | takeOffPlane(@PlaneID) |	@String |

#### Tests:

1. Prevent Take Off for a plane if weather is stormy

```

User Story - 7

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

```

#### Domain Model:
 
| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |	_weather     | landAPlane(@PlaneID) |	@String |

#### Tests:

1. Prevent landing of a plane if weather is stormy

```

User Story - 8

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```
#### Domain Model:
 
| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| PLANE  | isLanded |   | @Boolean |
| AIRPORT |		listOfLandedPlanes     |  |	@Number |


#### Tests:
1. Count number of planes landed which have an airportID.



Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.

| object |	property	| message | output |
| -------| -------------|-------  | ------- |
| AIRPORT |	listOfLandedPlanes | landAPlane(@planeID) | @string |
| AIRPORT |	capacity	| changeAirportCapacity(@Number) |	@Number |
| AIRPORT |		capacity     | landAPlane(@planeID) |	@Error |
| AIRPORT |		listOfLandedPlanes     | takeOffPlane(@PlaneID) |	@String |
| AIRPORT |		listOfLandedPlanes     | takeOffPlane(@PlaneID) |	@String |
| AIRPORT |		listOfLandedPlanes     | landAPlane(@PlaneID) |	@String |
| AIRPORT |	_weather     | takeOffPlane(@PlaneID) |	@String |
| AIRPORT |	_weather     | landAPlane(@PlaneID) |	@String |
| PLANE  | landedAt |   | @Boolean |
| AIRPORT |		listOfLandedPlanes     |  |	@Number |
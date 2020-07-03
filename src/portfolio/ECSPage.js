import React from 'react';
import '../assets/css/BlogPage.css'
import ComponentsImg from '../assets/img/components.png';
import FigureOneImg from '../assets/img/figure1.png';
import FigureTwoImg from '../assets/img/figure2.png';
import SystemImg from '../assets/img/system.png';
import ExampleImg from '../assets/img/example.png';
import ResultImg from '../assets/img/result.png';

const ECSPage = () => (
  <section id="ECSPage">
    <div className="BlogContent">
      <h1 className="BlogTitle">Archetypal Entity Component System (C++)</h1>
      <p>
        After watching several presentations on <strong>Data-Oriented Design</strong> and <strong>Entity Component Systems (ECS)</strong>, 
        I was inspired to try my hand at creating my own ECS implementation. Moreover, while developing 
        my ECS engine I ran into a few setbacks, and through research I discovered various approaches that 
        others have used to overcome these dilemmas. One such approach is the use of archetypes, 
        which I decided to incorporate in my design. The code can be found <a href="https://github.com/alexjobe/ecs">here</a>.
      </p>
      <h2 className="BlogSectionTitle">An Overview of ECS</h2>
      <hr />
      <p>
        ECS follows the <strong>Composition Over Inheritance</strong> principle, and aims to accomplish 
        two primary goals: <strong>Decoupling</strong> and <strong>Data Locality</strong>. Decoupling is the practice of 
        minimizing the amount of dependency between different pieces of code. Ideally, a change in one 
        piece of code should not require changes elsewhere. Data locality is an optimization technique in 
        which data is organized to take advantage of how the CPU handles memory.
      </p>
      <h3 className="BlogSubSectionTitle">Decoupling</h3>
      <hr />
      <p>
        In a traditional Object-Oriented approach to game design, most entities in the game world 
        would be represented as objects (e.g. Player, Enemy, Camera), and those objects would contain 
        various pieces of state and behavior.
      </p>
      <p>
        However, problems arise when an entity spans multiple domains. For example, you may have a player 
        object that contains data and functionality pertaining to input, movement, combat, sound, 
        animation, physics, etc. These domains must interact with each other: a player presses a button 
        and the character moves forward and attacks, which plays an animation and makes a sound. 
      </p>
      <p>
        This of course leads to coupling, as the player object contains code touching various domains. 
        Different domains should be encapsulated and isolated from one another: rendering has nothing to 
        do with sound, for example. Plus, a monolithic object that spans multiple domains is likely to 
        span thousands of lines of code, and become nigh impossible to maintain.
      </p>
      <p>
        To solve this predicament, an ECS engine pulls all data relating to a particular domain out of the entity, 
        and puts it in its own <strong>Component</strong> (usually a basic struct). All behavior is pulled out and divided 
        into separate <strong>Systems</strong>. So now an <strong>Entity</strong> is just a container of components. Each component only 
        contains data pertaining to a single domain, and does not know about other components. Systems 
        do not have any data of their own, and simply iterate over all entities that contain the component types  
        they operate on.
      </p>
      <p>
        This is an example of the <strong>Composition Over Inheritance</strong> principle, which states that a class 
        should achieve polymorphic behavior through its composition (containing instances of other classes) 
        rather than inheriting from a base class.
      </p>
      <p>
        Composition is a popular tool in game development, since games often contain many different entities that 
        share <i>some</i> functionality, and composition offers a level of flexibility that inheritance does not. 
        Components can be reused and recombined to create myriad diverse entities, which makes trying out new ideas 
        as easy as plugging in a new component. 
      </p>
      <p>
        ECS takes this a step further by separating data from functionality, so each entity is just a collection of 
        data components that systems process. A system only operates on a specific subset of components, which helps keep 
        domains decoupled. Editing a system should not require changes to other systems, nor the components they operate on.
      </p>
      <figure>
        <figcaption>
          Here is an example of two components. Notice that they are just basic data structs and
          contain no functions.
        </figcaption>
        <div className="ImgScrollContainer">
          <img src={ComponentsImg} alt="Components" />
        </div>
      </figure>
      <p>
        For example, a <strong>Player</strong> entity may contain an <strong>Input</strong>, 
        a <strong>Transform</strong>, and a <strong>Rigidbody</strong> component. A 
        <strong> Goblin</strong> entity may have an <strong>EnemyAI</strong>, a <strong>Transform</strong>, 
        and a <strong>Rigidbody</strong> component. The <strong>Physics</strong> system only cares 
        about entities that have a <strong>Transform</strong> <i>and</i> a <strong>Rigidbody</strong>, so it will 
        operate on both the <strong>Player</strong> and the <strong>Goblin</strong>. However, it does not 
        operate on the <strong>HealthBarUI</strong>, which contains a <strong>Transform</strong> but no 
        <strong> Rigidbody</strong>.
      </p>
      <h3 className="BlogSubSectionTitle">Data Locality</h3>
      <hr />
      <p>
        In the traditional Object-Oriented example, we had an object that contained multiple pieces of state 
        and behavior pertaining to that object, but not necessarily related otherwise. In addition to 
        encouraging tighter coupling, this design can exacerbate the number of cache misses and decrease performance.
      </p>
      <p>
        When the CPU needs a byte of data, it retrieves a block of contiguous memory from RAM that contains the byte, 
        and puts it in the cache. If the next piece of data needed is already in that block, the CPU can get it directly 
        from the cache, which is a lot faster than accessing RAM. However, if the needed data is not already there, the 
        CPU encounters a cache miss and the program stalls.
      </p>
      <p>
        Our Object-Oriented approach is not designed to take advantage of the cache. For example, say our game’s physics 
        update loop runs each frame, iterating over every game object and calling its <strong>Move()</strong> function, which updates its 
        position and velocity. When an object’s <strong>Move()</strong> function is called, the relevant member variables are pulled into 
        the cache (position and velocity) as well as nearby member variables, which may not be needed. These extra 
        variables take up valuable cache space, and because of the way our data is organized, we are likely to encounter 
        a cache miss every time we call <strong>Move()</strong> on a new object.
      </p>
      <p>
        Luckily our ECS lends itself well to this predicament. Right now each entity is just a container of components. 
        Instead, we can get rid of the container and represent the entity with a unique ID. So now an entity is just a 
        number, and we can store all components of the same type in their own packed array. We can use the entity’s ID 
        to index into the array, and when a system needs to operate on a certain type of component, it can load the entire 
        array (which is contiguous in memory) and iterate over every component of that type.
      </p>
      <h2 className="BlogSectionTitle">Archetypes</h2>
      <hr />
      <p>
        We still have a problem — we do not always want to operate on every component of the same type. Systems often only 
        care about entities that have a particular set of components. For example, most entities will have some kind of 
        <strong> Transform</strong> component, but the <strong>Physics</strong> system only cares about entities that have 
        a <strong>Transform</strong> <i>and</i> a <strong>Rigidbody</strong>.
      </p>
      <p>
        We could keep track of which entities a system cares about, and simply index into each array to retrieve those 
        specific entities’ components. However, this defeats the purpose of keeping components in a contiguous array in the 
        first place, since we would still be loading a bunch of components the system does not need (they just happen to be 
        of the same type).
      </p>
      <p>
        We can solve this quandary with archetypes. An <strong>Archetype</strong> is basically just a container of component arrays. Each 
        archetype has a unique signature of component types, and contains all the components for every entity that matches 
        that signature. 
      </p>
      <p>
        For example, <strong>Archetype A</strong> has an array of <strong>Transform</strong> components and an array of <strong>Rigidbody</strong> components. <strong>Archetype B </strong> 
        has arrays for <strong>Transform</strong> components, <strong>Rigidbody</strong> components, and <strong>Renderer</strong> components. An entity has a <strong>Transform</strong> and 
        a <strong>Rigidbody</strong>, so its components go in <strong>Archetype A</strong> (Figure 1). However, if we then add a <strong>Renderer</strong> to the entity, its components 
        all move to <strong>Archetype B</strong> (Figure 2).
      </p>
      <div className="ImgScrollContainer">
        <img src={FigureOneImg} alt="Figure 1" />
      </div>
      <div className="ImgScrollContainer">
        <img src={FigureTwoImg} alt="Figure 2" />
      </div>
      <p>
        Each system keeps a record of which archetypes match or contain its own component signature, and only operates 
        on the components in those archetypes. For example, if our <strong>Physics</strong> system only cares about entities that have a 
        <strong> Transform</strong> <i>and</i> a <strong>Rigidbody</strong>, it would operate on both <strong>Archetype A</strong> and <strong>Archetype B</strong> from the previous example. 
        However, <strong>Archetype C</strong> has an array of <strong>Transform</strong> components and an array of <strong>Renderer</strong> components, so the <strong>Physics </strong> 
        system would not operate on <strong>Archetype C</strong> (since it has no <strong>Rigidbody</strong> array).
      </p>
      <figure>
        <figcaption>
          In this example, the system only cares about entities with a Position and a Velocity component. Each system has
          a vector of pointers to the archetypes it needs, which is automatically maintained by the ECS engine. 
        </figcaption>
        <div className="ImgScrollContainer">
          <img src={SystemImg} alt="Physics System" />
        </div>
      </figure>
      <figure>
        <figcaption>
          A brief example of the ECS engine in action:
        </figcaption>
        <div className="ImgScrollContainer">
          <img src={ExampleImg} alt="Example" />
        </div>
        <figcaption>
          Output:
        </figcaption>
        <img src={ResultImg} alt="Result" />
      </figure>
      <h2 className="BlogSectionTitle">Conclusion</h2>
      <hr />
      <p>
        The ECS engine must track which components go in which archetypes, and move components whenever their owners' 
        archetypes change. It must also keep arrays packed, which requires moving components in the array when one 
        is removed, and maintaining a mapping from entity IDs to array indices. Because of this, there is additional 
        overhead when creating or destroying entities. However, this overhead is (hopefully) offset by the increased 
        speed of performing many homogenous operations on many different entities.
      </p>
      <p>
        I am admittedly new to the Data-Oriented programming paradigm, and this is my first ECS implementation. 
        It was a great learning experience, and I look forward to testing it in some games. If you have any 
        feedback or suggestions, feel free to send them my way.
      </p>

    </div>
  </section>
)

export default ECSPage;
import './reset.css'
import './style.css'
import {
    mealValuesSteffen,
    mealValuesAnton,
    mealValuesSeby
} from './data/mealValues.js'
import * as THREE from 'three'
import {
    OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
    DRACOLoader
} from 'three/examples/jsm/loaders/DRACOLoader.js'
import gsap from 'gsap'
import { Camera } from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let mixer = null

let mealType = document.getElementById('meal-type')
let mealTime = document.getElementById('meal-time')

let calorieValue = document.getElementById('calorie-value')
let calorieGoal = document.getElementById('calorie-goal')
let caloriePercent = document.getElementById('calorie-percent')
let calorieProgress = document.getElementById('calories-progress')

let proteinValue = document.getElementById('protein-value')
let proteinGoal = document.getElementById('protein-goal')
let proteinPercent = document.getElementById('protein-percent')
let proteinProgress = document.getElementById('protein-progress')

let fatValue = document.getElementById('fat-value')
let fatGoal = document.getElementById('fat-goal')
let fatPercent = document.getElementById('fat-percent')
let fatProgress = document.getElementById('fat-progress')

let carbValue = document.getElementById('carb-value')
let carbGoal = document.getElementById('carb-goal')
let carbPercent = document.getElementById('carb-percent')
let carbProgress = document.getElementById('carb-progress')

let proteinShapeBreakfast = new THREE.Mesh()
let fatShapeBreakfast = new THREE.Mesh()
let carbShapeBreakfast = new THREE.Mesh()
let calorieShapeBreakfast = new THREE.Mesh()
let proteinShapeLunch = new THREE.Mesh()
let fatShapeLunch = new THREE.Mesh()
let carbShapeLunch = new THREE.Mesh()
let calorieShapeLunch = new THREE.Mesh()
let proteinShapeDinner = new THREE.Mesh()
let fatShapeDinner = new THREE.Mesh()
let carbShapeDinner = new THREE.Mesh()
let calorieShapeDinner = new THREE.Mesh()

let proteinShapeBreakfast2 = new THREE.Mesh()
let fatShapeBreakfast2 = new THREE.Mesh()
let carbShapeBreakfast2 = new THREE.Mesh()
let calorieShapeBreakfast2 = new THREE.Mesh()
let proteinShapeLunch2 = new THREE.Mesh()
let fatShapeLunch2 = new THREE.Mesh()
let carbShapeLunch2 = new THREE.Mesh()
let calorieShapeLunch2 = new THREE.Mesh()
let proteinShapeDinner2 = new THREE.Mesh()
let fatShapeDinner2 = new THREE.Mesh()
let carbShapeDinner2 = new THREE.Mesh()
let calorieShapeDinner2 = new THREE.Mesh()
let proteinShapeFirstSnack2 = new THREE.Mesh()
let fatShapeFirstSnack2 = new THREE.Mesh()
let carbShapeFirstSnack2 = new THREE.Mesh()
let calorieShapeFirstSnack2 = new THREE.Mesh()

let proteinShapeBreakfast3 = new THREE.Mesh()
let fatShapeBreakfast3 = new THREE.Mesh()
let carbShapeBreakfast3 = new THREE.Mesh()
let calorieShapeBreakfast3 = new THREE.Mesh()
let proteinShapeLunch3 = new THREE.Mesh()
let fatShapeLunch3 = new THREE.Mesh()
let carbShapeLunch3 = new THREE.Mesh()
let calorieShapeLunch3 = new THREE.Mesh()
let proteinShapeDinner3 = new THREE.Mesh()
let fatShapeDinner3 = new THREE.Mesh()
let carbShapeDinner3 = new THREE.Mesh()
let calorieShapeDinner3 = new THREE.Mesh()
let proteinShapeFirstSnack3 = new THREE.Mesh()
let fatShapeFirstSnack3 = new THREE.Mesh()
let carbShapeFirstSnack3 = new THREE.Mesh()
let calorieShapeFirstSnack3 = new THREE.Mesh()


// Meal Objects Seby

// Breakfast

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.breakfastProtein / mealValuesSeby.proteinGoal, mealValuesSeby.breakfastProtein / mealValuesSeby.proteinGoal, mealValuesSeby.breakfastProtein / mealValuesSeby.proteinGoal)
        gltf.scene.position.set(mealValuesSeby.firstMoodMeasurement - (mealValuesSeby.breakfastProtein / mealValuesSeby.proteinGoal / 4 * 100 + 0.1), mealValuesSeby.firstEnergyMeasurement - (mealValuesSeby.breakfastProtein / mealValuesSeby.proteinGoal / 4 * 100 + 0.1), mealValuesSeby.breakfastTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeBreakfast = gltf.scene
        scene.add(proteinShapeBreakfast)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.breakfastFat / mealValuesSeby.fatGoal, mealValuesSeby.breakfastFat / mealValuesSeby.fatGoal, mealValuesSeby.breakfastFat / mealValuesSeby.fatGoal)
        gltf.scene.position.set(mealValuesSeby.firstMoodMeasurement + (mealValuesSeby.breakfastFat / mealValuesSeby.fatGoal / 4 * 100 + 0.1), mealValuesSeby.firstEnergyMeasurement - (mealValuesSeby.breakfastFat / mealValuesSeby.fatGoal / 4 * 100 + 0.1), mealValuesSeby.breakfastTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeBreakfast = gltf.scene
        scene.add(fatShapeBreakfast)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.breakfastCarbs / mealValuesSeby.carbGoal, mealValuesSeby.breakfastCarbs / mealValuesSeby.carbGoal, mealValuesSeby.breakfastCarbs / mealValuesSeby.carbGoal)
        gltf.scene.position.set(mealValuesSeby.firstMoodMeasurement + (mealValuesSeby.breakfastCarbs / mealValuesSeby.carbGoal / 4 * 100 + 0.1), mealValuesSeby.firstEnergyMeasurement + (mealValuesSeby.breakfastCarbs / mealValuesSeby.carbGoal / 4 * 100 + 0.1), mealValuesSeby.breakfastTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeBreakfast = gltf.scene
        scene.add(carbShapeBreakfast)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.breakfastCalories / mealValuesSeby.calorieGoal, mealValuesSeby.breakfastCalories / mealValuesSeby.calorieGoal, mealValuesSeby.breakfastCalories / mealValuesSeby.calorieGoal)
        gltf.scene.position.set(mealValuesSeby.firstMoodMeasurement - (mealValuesSeby.breakfastCalories / mealValuesSeby.calorieGoal / 4 * 100 + 0.1), mealValuesSeby.firstEnergyMeasurement + (mealValuesSeby.breakfastCalories / mealValuesSeby.calorieGoal / 4 * 100 + 0.1), mealValuesSeby.breakfastTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeBreakfast = gltf.scene
        scene.add(calorieShapeBreakfast)
    }
)

// Lunch

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.lunchProtein / mealValuesSeby.proteinGoal, mealValuesSeby.lunchProtein / mealValuesSeby.proteinGoal, mealValuesSeby.lunchProtein / mealValuesSeby.proteinGoal)
        gltf.scene.position.set(mealValuesSeby.secondMoodMeasurement - (mealValuesSeby.lunchProtein / mealValuesSeby.proteinGoal / 4 * 100 + 0.1), mealValuesSeby.secondEnergyMeasurement - (mealValuesSeby.lunchProtein / mealValuesSeby.proteinGoal / 4 * 100 + 0.1), mealValuesSeby.lunchTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeLunch = gltf.scene
        scene.add(proteinShapeLunch)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.lunchFat / mealValuesSeby.fatGoal, mealValuesSeby.lunchFat / mealValuesSeby.fatGoal, mealValuesSeby.lunchFat / mealValuesSeby.fatGoal)
        gltf.scene.position.set(mealValuesSeby.secondMoodMeasurement + (mealValuesSeby.lunchFat / mealValuesSeby.fatGoal / 4 * 100 + 0.1), mealValuesSeby.secondEnergyMeasurement - (mealValuesSeby.lunchFat / mealValuesSeby.fatGoal / 4 * 100 + 0.1), mealValuesSeby.lunchTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeLunch = gltf.scene
        scene.add(fatShapeLunch)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.lunchCarbs / mealValuesSeby.carbGoal, mealValuesSeby.lunchCarbs / mealValuesSeby.carbGoal, mealValuesSeby.lunchCarbs / mealValuesSeby.carbGoal)
        gltf.scene.position.set(mealValuesSeby.secondMoodMeasurement + (mealValuesSeby.lunchCarbs / mealValuesSeby.carbGoal / 4 * 100 + 0.1), mealValuesSeby.secondEnergyMeasurement + (mealValuesSeby.lunchCarbs / mealValuesSeby.carbGoal / 4 * 100 + 0.1), mealValuesSeby.lunchTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeLunch = gltf.scene
        scene.add(carbShapeLunch)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.lunchCalories / mealValuesSeby.calorieGoal, mealValuesSeby.lunchCalories / mealValuesSeby.calorieGoal, mealValuesSeby.lunchCalories / mealValuesSeby.calorieGoal)
        gltf.scene.position.set(mealValuesSeby.secondMoodMeasurement - (mealValuesSeby.lunchCalories / mealValuesSeby.calorieGoal / 4 * 100 + 0.1), mealValuesSeby.secondEnergyMeasurement + (mealValuesSeby.lunchCalories / mealValuesSeby.calorieGoal / 4 * 100 + 0.1), mealValuesSeby.lunchTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeLunch = gltf.scene
        scene.add(calorieShapeLunch)
    }
)

// Dinner

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.dinnerProtein / mealValuesSeby.proteinGoal, mealValuesSeby.dinnerProtein / mealValuesSeby.proteinGoal, mealValuesSeby.dinnerProtein / mealValuesSeby.proteinGoal)
        gltf.scene.position.set(mealValuesSeby.thirdMoodMeasurement - (mealValuesSeby.dinnerProtein / mealValuesSeby.proteinGoal / 4 * 100 + 0.1), mealValuesSeby.thirdEnergyMeasurement - (mealValuesSeby.dinnerProtein / mealValuesSeby.proteinGoal / 4 * 100 + 0.1), mealValuesSeby.dinnerTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeDinner = gltf.scene
        scene.add(proteinShapeDinner)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.dinnerFat / mealValuesSeby.fatGoal, mealValuesSeby.dinnerFat / mealValuesSeby.fatGoal, mealValuesSeby.dinnerFat / mealValuesSeby.fatGoal)
        gltf.scene.position.set(mealValuesSeby.thirdMoodMeasurement + (mealValuesSeby.dinnerFat / mealValuesSeby.fatGoal / 4 * 100 + 0.1), mealValuesSeby.thirdEnergyMeasurement - (mealValuesSeby.dinnerFat / mealValuesSeby.fatGoal / 4 * 100 + 0.1), mealValuesSeby.dinnerTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeDinner = gltf.scene
        scene.add(fatShapeDinner)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.dinnerCarbs / mealValuesSeby.carbGoal, mealValuesSeby.dinnerCarbs / mealValuesSeby.carbGoal, mealValuesSeby.dinnerCarbs / mealValuesSeby.carbGoal)
        gltf.scene.position.set(mealValuesSeby.thirdMoodMeasurement + (mealValuesSeby.dinnerCarbs / mealValuesSeby.carbGoal / 4 * 100 + 0.1), mealValuesSeby.thirdEnergyMeasurement + (mealValuesSeby.dinnerCarbs / mealValuesSeby.carbGoal / 4 * 100 + 0.1), mealValuesSeby.dinnerTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeDinner = gltf.scene
        scene.add(carbShapeDinner)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSeby.dinnerCalories / mealValuesSeby.calorieGoal, mealValuesSeby.dinnerCalories / mealValuesSeby.calorieGoal, mealValuesSeby.dinnerCalories / mealValuesSeby.calorieGoal)
        gltf.scene.position.set(mealValuesSeby.thirdMoodMeasurement - (mealValuesSeby.dinnerCalories / mealValuesSeby.calorieGoal / 4 * 100 + 0.1), mealValuesSeby.thirdEnergyMeasurement + (mealValuesSeby.dinnerCalories / mealValuesSeby.calorieGoal / 4 * 100 + 0.1), mealValuesSeby.dinnerTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeDinner = gltf.scene
        scene.add(calorieShapeDinner)
    }
)

// Meal Objects Steffen

// Breakfast

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.breakfastProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.breakfastProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.breakfastProtein / mealValuesSteffen.proteinGoal)
        gltf.scene.position.set(mealValuesSteffen.firstMoodMeasurement - (mealValuesSteffen.breakfastProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.firstEnergyMeasurement - (mealValuesSteffen.breakfastProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1), mealValuesSteffen.breakfastTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeBreakfast2 = gltf.scene
        scene.add(proteinShapeBreakfast2)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.breakfastFat / mealValuesSteffen.fatGoal, mealValuesSteffen.breakfastFat / mealValuesSteffen.fatGoal, mealValuesSteffen.breakfastFat / mealValuesSteffen.fatGoal)
        gltf.scene.position.set(mealValuesSteffen.firstMoodMeasurement + (mealValuesSteffen.breakfastFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.firstEnergyMeasurement - (mealValuesSteffen.breakfastFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1), mealValuesSteffen.breakfastTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeBreakfast2 = gltf.scene
        scene.add(fatShapeBreakfast2)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.breakfastCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.breakfastCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.breakfastCarbs / mealValuesSteffen.carbGoal)
        gltf.scene.position.set(mealValuesSteffen.firstMoodMeasurement + (mealValuesSteffen.breakfastCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.firstEnergyMeasurement + (mealValuesSteffen.breakfastCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1), mealValuesSteffen.breakfastTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeBreakfast2 = gltf.scene
        scene.add(carbShapeBreakfast2)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.breakfastCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.breakfastCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.breakfastCalories / mealValuesSteffen.calorieGoal)
        gltf.scene.position.set(mealValuesSteffen.firstMoodMeasurement - (mealValuesSteffen.breakfastCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.firstEnergyMeasurement + (mealValuesSteffen.breakfastCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1), mealValuesSteffen.breakfastTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeBreakfast2 = gltf.scene
        scene.add(calorieShapeBreakfast2)
    }
)

// Lunch

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.lunchProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.lunchProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.lunchProtein / mealValuesSteffen.proteinGoal)
        gltf.scene.position.set(mealValuesSteffen.secondMoodMeasurement - (mealValuesSteffen.lunchProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.secondEnergyMeasurement - (mealValuesSteffen.lunchProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1), mealValuesSteffen.lunchTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeLunch2 = gltf.scene
        scene.add(proteinShapeLunch2)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.lunchFat / mealValuesSteffen.fatGoal, mealValuesSteffen.lunchFat / mealValuesSteffen.fatGoal, mealValuesSteffen.lunchFat / mealValuesSteffen.fatGoal)
        gltf.scene.position.set(mealValuesSteffen.secondMoodMeasurement + (mealValuesSteffen.lunchFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.secondEnergyMeasurement - (mealValuesSteffen.lunchFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1), mealValuesSteffen.lunchTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeLunch2 = gltf.scene
        scene.add(fatShapeLunch2)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.lunchCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.lunchCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.lunchCarbs / mealValuesSteffen.carbGoal)
        gltf.scene.position.set(mealValuesSteffen.secondMoodMeasurement + (mealValuesSteffen.lunchCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.secondEnergyMeasurement + (mealValuesSteffen.lunchCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1), mealValuesSteffen.lunchTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeLunch2 = gltf.scene
        scene.add(carbShapeLunch2)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.lunchCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.lunchCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.lunchCalories / mealValuesSteffen.calorieGoal)
        gltf.scene.position.set(mealValuesSteffen.secondMoodMeasurement - (mealValuesSteffen.lunchCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.secondEnergyMeasurement + (mealValuesSteffen.lunchCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1), mealValuesSteffen.lunchTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeLunch2 = gltf.scene
        scene.add(calorieShapeLunch2)
    }
)

// Dinner

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.dinnerProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.dinnerProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.dinnerProtein / mealValuesSteffen.proteinGoal)
        gltf.scene.position.set(mealValuesSteffen.thirdMoodMeasurement - (mealValuesSteffen.dinnerProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.thirdEnergyMeasurement - (mealValuesSteffen.dinnerProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1), mealValuesSteffen.dinnerTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeDinner2 = gltf.scene
        scene.add(proteinShapeDinner2)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.dinnerFat / mealValuesSteffen.fatGoal, mealValuesSteffen.dinnerFat / mealValuesSteffen.fatGoal, mealValuesSteffen.dinnerFat / mealValuesSteffen.fatGoal)
        gltf.scene.position.set(mealValuesSteffen.thirdMoodMeasurement + (mealValuesSteffen.dinnerFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.thirdEnergyMeasurement - (mealValuesSteffen.dinnerFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1), mealValuesSteffen.dinnerTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeDinner2 = gltf.scene
        scene.add(fatShapeDinner2)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.dinnerCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.dinnerCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.dinnerCarbs / mealValuesSteffen.carbGoal)
        gltf.scene.position.set(mealValuesSteffen.thirdMoodMeasurement + (mealValuesSteffen.dinnerCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.thirdEnergyMeasurement + (mealValuesSteffen.dinnerCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1), mealValuesSteffen.dinnerTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeDinner2 = gltf.scene
        scene.add(carbShapeDinner2)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.dinnerCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.dinnerCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.dinnerCalories / mealValuesSteffen.calorieGoal)
        gltf.scene.position.set(mealValuesSteffen.thirdMoodMeasurement - (mealValuesSteffen.dinnerCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.thirdEnergyMeasurement + (mealValuesSteffen.dinnerCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1), mealValuesSteffen.dinnerTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeDinner2 = gltf.scene
        scene.add(calorieShapeDinner2)
    }
)

// First Snack

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.firstSnackProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.firstSnackProtein / mealValuesSteffen.proteinGoal, mealValuesSteffen.firstSnackProtein / mealValuesSteffen.proteinGoal)
        gltf.scene.position.set(mealValuesSteffen.fourthMoodMeasurement - (mealValuesSteffen.firstSnackProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.fourthEnergyMeasurement - (mealValuesSteffen.firstSnackProtein / mealValuesSteffen.proteinGoal / 4 * 100 + 0.1), mealValuesSteffen.firstSnackTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeFirstSnack2 = gltf.scene
        scene.add(proteinShapeFirstSnack2)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.firstSnackFat / mealValuesSteffen.fatGoal, mealValuesSteffen.firstSnackFat / mealValuesSteffen.fatGoal, mealValuesSteffen.firstSnackFat / mealValuesSteffen.fatGoal)
        gltf.scene.position.set(mealValuesSteffen.fourthMoodMeasurement + (mealValuesSteffen.firstSnackFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.fourthEnergyMeasurement - (mealValuesSteffen.firstSnackFat / mealValuesSteffen.fatGoal / 4 * 100 + 0.1), mealValuesSteffen.firstSnackTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeFirstSnack2 = gltf.scene
        scene.add(fatShapeFirstSnack2)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.firstSnackCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.firstSnackCarbs / mealValuesSteffen.carbGoal, mealValuesSteffen.firstSnackCarbs / mealValuesSteffen.carbGoal)
        gltf.scene.position.set(mealValuesSteffen.fourthMoodMeasurement + (mealValuesSteffen.firstSnackCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.fourthEnergyMeasurement + (mealValuesSteffen.firstSnackCarbs / mealValuesSteffen.carbGoal / 4 * 100 + 0.1), mealValuesSteffen.firstSnackTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeFirstSnack2 = gltf.scene
        scene.add(carbShapeFirstSnack2)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesSteffen.firstSnackCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.firstSnackCalories / mealValuesSteffen.calorieGoal, mealValuesSteffen.firstSnackCalories / mealValuesSteffen.calorieGoal)
        gltf.scene.position.set(mealValuesSteffen.fourthMoodMeasurement - (mealValuesSteffen.firstSnackCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1) - 600, mealValuesSteffen.fourthEnergyMeasurement + (mealValuesSteffen.firstSnackCalories / mealValuesSteffen.calorieGoal / 4 * 100 + 0.1), mealValuesSteffen.firstSnackTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeFirstSnack2 = gltf.scene
        scene.add(calorieShapeFirstSnack2)
    }
)

// Meal Objects Anton

// Breakfast

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.breakfastProtein / mealValuesAnton.proteinGoal, mealValuesAnton.breakfastProtein / mealValuesAnton.proteinGoal, mealValuesAnton.breakfastProtein / mealValuesAnton.proteinGoal)
        gltf.scene.position.set(mealValuesAnton.firstMoodMeasurement - (mealValuesAnton.breakfastProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.firstEnergyMeasurement - (mealValuesAnton.breakfastProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1), mealValuesAnton.breakfastTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeBreakfast3 = gltf.scene
        scene.add(proteinShapeBreakfast3)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.breakfastFat / mealValuesAnton.fatGoal, mealValuesAnton.breakfastFat / mealValuesAnton.fatGoal, mealValuesAnton.breakfastFat / mealValuesAnton.fatGoal)
        gltf.scene.position.set(mealValuesAnton.firstMoodMeasurement + (mealValuesAnton.breakfastFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.firstEnergyMeasurement - (mealValuesAnton.breakfastFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1), mealValuesAnton.breakfastTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeBreakfast3 = gltf.scene
        scene.add(fatShapeBreakfast3)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.breakfastCarbs / mealValuesAnton.carbGoal, mealValuesAnton.breakfastCarbs / mealValuesAnton.carbGoal, mealValuesAnton.breakfastCarbs / mealValuesAnton.carbGoal)
        gltf.scene.position.set(mealValuesAnton.firstMoodMeasurement + (mealValuesAnton.breakfastCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.firstEnergyMeasurement + (mealValuesAnton.breakfastCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1), mealValuesAnton.breakfastTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeBreakfast3 = gltf.scene
        scene.add(carbShapeBreakfast3)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.breakfastCalories / mealValuesAnton.calorieGoal, mealValuesAnton.breakfastCalories / mealValuesAnton.calorieGoal, mealValuesAnton.breakfastCalories / mealValuesAnton.calorieGoal)
        gltf.scene.position.set(mealValuesAnton.firstMoodMeasurement - (mealValuesAnton.breakfastCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.firstEnergyMeasurement + (mealValuesAnton.breakfastCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1), mealValuesAnton.breakfastTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeBreakfast3 = gltf.scene
        scene.add(calorieShapeBreakfast3)
    }
)

// Lunch

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.lunchProtein / mealValuesAnton.proteinGoal, mealValuesAnton.lunchProtein / mealValuesAnton.proteinGoal, mealValuesAnton.lunchProtein / mealValuesAnton.proteinGoal)
        gltf.scene.position.set(mealValuesAnton.secondMoodMeasurement - (mealValuesAnton.lunchProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.secondEnergyMeasurement - (mealValuesAnton.lunchProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1), mealValuesAnton.lunchTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeLunch3 = gltf.scene
        scene.add(proteinShapeLunch3)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.lunchFat / mealValuesAnton.fatGoal, mealValuesAnton.lunchFat / mealValuesAnton.fatGoal, mealValuesAnton.lunchFat / mealValuesAnton.fatGoal)
        gltf.scene.position.set(mealValuesAnton.secondMoodMeasurement + (mealValuesAnton.lunchFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.secondEnergyMeasurement - (mealValuesAnton.lunchFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1), mealValuesAnton.lunchTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeLunch3 = gltf.scene
        scene.add(fatShapeLunch3)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.lunchCarbs / mealValuesAnton.carbGoal, mealValuesAnton.lunchCarbs / mealValuesAnton.carbGoal, mealValuesAnton.lunchCarbs / mealValuesAnton.carbGoal)
        gltf.scene.position.set(mealValuesAnton.secondMoodMeasurement + (mealValuesAnton.lunchCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.secondEnergyMeasurement + (mealValuesAnton.lunchCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1), mealValuesAnton.lunchTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeLunch3 = gltf.scene
        scene.add(carbShapeLunch3)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.lunchCalories / mealValuesAnton.calorieGoal, mealValuesAnton.lunchCalories / mealValuesAnton.calorieGoal, mealValuesAnton.lunchCalories / mealValuesAnton.calorieGoal)
        gltf.scene.position.set(mealValuesAnton.secondMoodMeasurement - (mealValuesAnton.lunchCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.secondEnergyMeasurement + (mealValuesAnton.lunchCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1), mealValuesAnton.lunchTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeLunch3 = gltf.scene
        scene.add(calorieShapeLunch3)
    }
)

// Dinner

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.dinnerProtein / mealValuesAnton.proteinGoal, mealValuesAnton.dinnerProtein / mealValuesAnton.proteinGoal, mealValuesAnton.dinnerProtein / mealValuesAnton.proteinGoal)
        gltf.scene.position.set(mealValuesAnton.thirdMoodMeasurement - (mealValuesAnton.dinnerProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.thirdEnergyMeasurement - (mealValuesAnton.dinnerProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1), mealValuesAnton.dinnerTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeDinner3 = gltf.scene
        scene.add(proteinShapeDinner3)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.dinnerFat / mealValuesAnton.fatGoal, mealValuesAnton.dinnerFat / mealValuesAnton.fatGoal, mealValuesAnton.dinnerFat / mealValuesAnton.fatGoal)
        gltf.scene.position.set(mealValuesAnton.thirdMoodMeasurement + (mealValuesAnton.dinnerFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.thirdEnergyMeasurement - (mealValuesAnton.dinnerFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1), mealValuesAnton.dinnerTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeDinner3 = gltf.scene
        scene.add(fatShapeDinner3)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.dinnerCarbs / mealValuesAnton.carbGoal, mealValuesAnton.dinnerCarbs / mealValuesAnton.carbGoal, mealValuesAnton.dinnerCarbs / mealValuesAnton.carbGoal)
        gltf.scene.position.set(mealValuesAnton.thirdMoodMeasurement + (mealValuesAnton.dinnerCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.thirdEnergyMeasurement + (mealValuesAnton.dinnerCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1), mealValuesAnton.dinnerTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeDinner3 = gltf.scene
        scene.add(carbShapeDinner3)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.dinnerCalories / mealValuesAnton.calorieGoal, mealValuesAnton.dinnerCalories / mealValuesAnton.calorieGoal, mealValuesAnton.dinnerCalories / mealValuesAnton.calorieGoal)
        gltf.scene.position.set(mealValuesAnton.thirdMoodMeasurement - (mealValuesAnton.dinnerCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.thirdEnergyMeasurement + (mealValuesAnton.dinnerCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1), mealValuesAnton.dinnerTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeDinner3 = gltf.scene
        scene.add(calorieShapeDinner3)
    }
)

// First Snack

gltfLoader.load(
    '/models/Proteinshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.firstSnackProtein / mealValuesAnton.proteinGoal, mealValuesAnton.firstSnackProtein / mealValuesAnton.proteinGoal, mealValuesAnton.firstSnackProtein / mealValuesAnton.proteinGoal)
        gltf.scene.position.set(mealValuesAnton.fourthMoodMeasurement - (mealValuesAnton.firstSnackProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.fourthEnergyMeasurement - (mealValuesAnton.firstSnackProtein / mealValuesAnton.proteinGoal / 4 * 100 + 0.1), mealValuesAnton.firstSnackTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), -(Math.PI / 2))
        proteinShapeFirstSnack3 = gltf.scene
        scene.add(proteinShapeFirstSnack3)
    }
)

gltfLoader.load(
    '/models/Fatshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.firstSnackFat / mealValuesAnton.fatGoal, mealValuesAnton.firstSnackFat / mealValuesAnton.fatGoal, mealValuesAnton.firstSnackFat / mealValuesAnton.fatGoal)
        gltf.scene.position.set(mealValuesAnton.fourthMoodMeasurement + (mealValuesAnton.firstSnackFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.fourthEnergyMeasurement - (mealValuesAnton.firstSnackFat / mealValuesAnton.fatGoal / 4 * 100 + 0.1), mealValuesAnton.firstSnackTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), -(Math.PI / 2))
        fatShapeFirstSnack3 = gltf.scene
        scene.add(fatShapeFirstSnack3)
    }
)

gltfLoader.load(
    '/models/Carbshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.firstSnackCarbs / mealValuesAnton.carbGoal, mealValuesAnton.firstSnackCarbs / mealValuesAnton.carbGoal, mealValuesAnton.firstSnackCarbs / mealValuesAnton.carbGoal)
        gltf.scene.position.set(mealValuesAnton.fourthMoodMeasurement + (mealValuesAnton.firstSnackCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.fourthEnergyMeasurement + (mealValuesAnton.firstSnackCarbs / mealValuesAnton.carbGoal / 4 * 100 + 0.1), mealValuesAnton.firstSnackTime)
        gltf.scene.rotation.set(0, -(Math.PI / 2), (Math.PI / 2))
        carbShapeFirstSnack3 = gltf.scene
        scene.add(carbShapeFirstSnack3)
    }
)

gltfLoader.load(
    '/models/Calorieshape.gltf',
    (gltf) => {
        gltf.scene.scale.set(mealValuesAnton.firstSnackCalories / mealValuesAnton.calorieGoal, mealValuesAnton.firstSnackCalories / mealValuesAnton.calorieGoal, mealValuesAnton.firstSnackCalories / mealValuesAnton.calorieGoal)
        gltf.scene.position.set(mealValuesAnton.fourthMoodMeasurement - (mealValuesAnton.firstSnackCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1) + 600, mealValuesAnton.fourthEnergyMeasurement + (mealValuesAnton.firstSnackCalories / mealValuesAnton.calorieGoal / 4 * 100 + 0.1), mealValuesAnton.firstSnackTime)
        gltf.scene.rotation.set(0, (Math.PI / 2), (Math.PI / 2))
        calorieShapeFirstSnack3 = gltf.scene
        scene.add(calorieShapeFirstSnack3)
    }
)

/**
 * Material
 */

const AxisMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff
});

// Axis Seby

const xAxispoints = [];
xAxispoints.push(new THREE.Vector3(-200, 0, 0));
xAxispoints.push(new THREE.Vector3(200, 0, 0));

const xAxisGeometry = new THREE.BufferGeometry().setFromPoints(xAxispoints);

const xAxisLine = new THREE.Line(xAxisGeometry, AxisMaterial);
scene.add(xAxisLine);

const yAxispoints = [];
yAxispoints.push(new THREE.Vector3(0, -200, 0));
yAxispoints.push(new THREE.Vector3(0, 200, 0));

const yAxisGeometry = new THREE.BufferGeometry().setFromPoints(yAxispoints);

const yAxisLine = new THREE.Line(yAxisGeometry, AxisMaterial);
scene.add(yAxisLine);

const zAxispoints = [];
zAxispoints.push(new THREE.Vector3(0, 0, 0));
zAxispoints.push(new THREE.Vector3(0, 0, 780));

const zAxisGeometry = new THREE.BufferGeometry().setFromPoints(zAxispoints);

const zAxisLine = new THREE.Line(zAxisGeometry, AxisMaterial);
scene.add(zAxisLine);

// Axis Steffen

const xAxispoints2 = [];
xAxispoints2.push(new THREE.Vector3(-800, 0, 0));
xAxispoints2.push(new THREE.Vector3(-400, 0, 0));

const xAxisGeometry2 = new THREE.BufferGeometry().setFromPoints(xAxispoints2);

const xAxisLine2 = new THREE.Line(xAxisGeometry2, AxisMaterial);
scene.add(xAxisLine2);

const yAxispoints2 = [];
yAxispoints2.push(new THREE.Vector3(-600, -200, 0));
yAxispoints2.push(new THREE.Vector3(-600, 200, 0));

const yAxisGeometry2 = new THREE.BufferGeometry().setFromPoints(yAxispoints2);

const yAxisLine2 = new THREE.Line(yAxisGeometry2, AxisMaterial);
scene.add(yAxisLine2);

const zAxispoints2 = [];
zAxispoints2.push(new THREE.Vector3(-600, 0, 0));
zAxispoints2.push(new THREE.Vector3(-600, 0, 780));

const zAxisGeometry2 = new THREE.BufferGeometry().setFromPoints(zAxispoints2);

const zAxisLine2 = new THREE.Line(zAxisGeometry2, AxisMaterial);
scene.add(zAxisLine2);

// Axis Anton

const xAxispoints3 = [];
xAxispoints3.push(new THREE.Vector3(400, 0, 0));
xAxispoints3.push(new THREE.Vector3(800, 0, 0));

const xAxisGeometry3 = new THREE.BufferGeometry().setFromPoints(xAxispoints3);

const xAxisLine3 = new THREE.Line(xAxisGeometry3, AxisMaterial);
scene.add(xAxisLine3);

const yAxispoints3 = [];
yAxispoints3.push(new THREE.Vector3(600, -200, 0));
yAxispoints3.push(new THREE.Vector3(600, 200, 0));

const yAxisGeometry3 = new THREE.BufferGeometry().setFromPoints(yAxispoints3);

const yAxisLine3 = new THREE.Line(yAxisGeometry3, AxisMaterial);
scene.add(yAxisLine3);

const zAxispoints3 = [];
zAxispoints3.push(new THREE.Vector3(600, 0, 0));
zAxispoints3.push(new THREE.Vector3(600, 0, 780));

const zAxisGeometry3 = new THREE.BufferGeometry().setFromPoints(zAxispoints3);

const zAxisLine3 = new THREE.Line(zAxisGeometry3, AxisMaterial);
scene.add(zAxisLine3);

// Wireframe
const wireframeGeometry = new THREE.BoxGeometry(100, 100, 15);
const wireframeMaterial = new THREE.MeshPhongMaterial({
    color: 0x222222,
    wireframe: true
});

const breakfastCubeSteffen = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
breakfastCubeSteffen.position.set(mealValuesSteffen.firstMoodMeasurement-600,mealValuesSteffen.firstEnergyMeasurement,mealValuesSteffen.breakfastTime)
scene.add(breakfastCubeSteffen);

const lunchCubeSteffen = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
lunchCubeSteffen.position.set(mealValuesSteffen.secondMoodMeasurement-600,mealValuesSteffen.secondEnergyMeasurement,mealValuesSteffen.lunchTime)
scene.add(lunchCubeSteffen);

const dinnerCubeSteffen = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
dinnerCubeSteffen.position.set(mealValuesSteffen.thirdMoodMeasurement-600,mealValuesSteffen.thirdEnergyMeasurement,mealValuesSteffen.dinnerTime)
scene.add(dinnerCubeSteffen);

const snackCubeSteffen = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
snackCubeSteffen.position.set(mealValuesSteffen.fourthMoodMeasurement-600,mealValuesSteffen.fourthEnergyMeasurement,mealValuesSteffen.firstSnackTime)
scene.add(snackCubeSteffen);

const breakfastCubeSeby = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
breakfastCubeSeby.position.set(mealValuesSeby.firstMoodMeasurement,mealValuesSeby.firstEnergyMeasurement,mealValuesSeby.breakfastTime)
scene.add(breakfastCubeSeby);

const lunchCubeSeby = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
lunchCubeSeby.position.set(mealValuesSeby.secondMoodMeasurement,mealValuesSeby.secondEnergyMeasurement,mealValuesSeby.lunchTime)
scene.add(lunchCubeSeby);

const dinnerCubeSeby = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
dinnerCubeSeby.position.set(mealValuesSeby.thirdMoodMeasurement,mealValuesSeby.thirdEnergyMeasurement,mealValuesSeby.dinnerTime)
scene.add(dinnerCubeSeby);

const breakfastCubeAnton = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
breakfastCubeAnton.position.set(mealValuesAnton.firstMoodMeasurement+600,mealValuesAnton.firstEnergyMeasurement,mealValuesAnton.breakfastTime)
scene.add(breakfastCubeAnton);

const lunchCubeAnton = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
lunchCubeAnton.position.set(mealValuesAnton.secondMoodMeasurement+600,mealValuesAnton.secondEnergyMeasurement,mealValuesAnton.lunchTime)
scene.add(lunchCubeAnton);

const dinnerCubeAnton = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
dinnerCubeAnton.position.set(mealValuesAnton.thirdMoodMeasurement+600,mealValuesAnton.thirdEnergyMeasurement,mealValuesAnton.dinnerTime)
scene.add(dinnerCubeAnton);

const snackCubeAnton = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
snackCubeAnton.position.set(mealValuesAnton.fourthMoodMeasurement+600,mealValuesAnton.fourthEnergyMeasurement,mealValuesAnton.firstSnackTime)
scene.add(snackCubeAnton);

// Ground

const groundMaterial = new THREE.MeshBasicMaterial({
    color: 0x090909
})

const groundGeometry = new THREE.BoxGeometry(7750,1,7750)

const ground = new THREE.Mesh(groundGeometry, groundMaterial)
ground.position.y = -2000
ground.position.z = 312.5
scene.add(ground)

// Energie Kasten

const energyBoxMaterial = new THREE.MeshBasicMaterial({
    color: 0x101011
})

const energyBoxGeometry = new THREE.BoxGeometry(1,4000,4000)

const energyBox = new THREE.Mesh(energyBoxGeometry, energyBoxMaterial)
energyBox.position.x = -400


// Connecting Lines

const linePointsSteffen = [];
linePointsSteffen.push(new THREE.Vector3(-550, -50, 210));
linePointsSteffen.push(new THREE.Vector3(-450, -50, 240));
linePointsSteffen.push(new THREE.Vector3(-500, 50, 330));
linePointsSteffen.push(new THREE.Vector3(-750, -100, 420));
linePointsSteffen.push(new THREE.Vector3(-500, 50, 510));
linePointsSteffen.push(new THREE.Vector3(-550, 50, 600));
linePointsSteffen.push(new THREE.Vector3(-500, -200, 690));

const lineMaterialSteffen = new THREE.LineBasicMaterial({
    color: 0xFFDFA3
});

const lineForSteffen = new THREE.BufferGeometry().setFromPoints(linePointsSteffen);

const lineSteffen = new THREE.Line(lineForSteffen, lineMaterialSteffen);

scene.add(lineSteffen)


const linePointsAnton = [];
linePointsAnton.push(new THREE.Vector3(550, -100, 315));
linePointsAnton.push(new THREE.Vector3(550, -100, 330));
linePointsAnton.push(new THREE.Vector3(700, 50, 420));
linePointsAnton.push(new THREE.Vector3(700, 150, 510));
linePointsAnton.push(new THREE.Vector3(500, -150, 600));
linePointsAnton.push(new THREE.Vector3(700, 150, 690));
linePointsAnton.push(new THREE.Vector3(750, 50, 750));


const lineMaterialAnton = new THREE.LineBasicMaterial({
    color: 0xA3D9FF
});

const lineForAnton = new THREE.BufferGeometry().setFromPoints(linePointsAnton);

const lineAnton = new THREE.Line(lineForAnton, lineMaterialAnton);

scene.add(lineAnton)


const linePointsSeby = [];
linePointsSeby.push(new THREE.Vector3(150, -200, 240));
linePointsSeby.push(new THREE.Vector3(150, -200, 330));
linePointsSeby.push(new THREE.Vector3(100, 50, 420));
linePointsSeby.push(new THREE.Vector3(50, 100, 510));
linePointsSeby.push(new THREE.Vector3(100, -100, 600));
linePointsSeby.push(new THREE.Vector3(50, -100, 690));
linePointsSeby.push(new THREE.Vector3(150, 50, 750));

const lineMaterialSeby = new THREE.LineBasicMaterial({
    color: 0xB2EF9B
});

const lineForSeby = new THREE.BufferGeometry().setFromPoints(linePointsSeby);

const lineSeby = new THREE.Line(lineForSeby, lineMaterialSeby);

scene.add(lineSeby)

/*
var tubeGeometrySeby = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(linePointsSeby),
    512, // path segments
    0.5, // THICKNESS
    8, //Roundness of Tube
    false //closed
);

let lineSeby = new THREE.Mesh(tubeGeometrySeby, lineMaterialSeby);
*/

/**
 * Lights
 */

//Lichter in einem Array erstellen?
const directionalLightFront = new THREE.DirectionalLight(0xffffff, 1)
directionalLightFront.position.set(0, 0, 100)
scene.add(directionalLightFront)

const directionalLightBack = new THREE.DirectionalLight(0xffffff, 1)
directionalLightBack.position.set(0, 0, -100)
scene.add(directionalLightBack)

const directionalLightAbove = new THREE.DirectionalLight(0xffffff, 1)
directionalLightAbove.position.set(0, 100, 0)
scene.add(directionalLightAbove)

const directionalLightBelow = new THREE.DirectionalLight(0xffffff, 1)
directionalLightBelow.position.set(0, -100, 0)
scene.add(directionalLightBelow)

const directionalLightRight = new THREE.DirectionalLight(0xffffff, )
directionalLightRight.position.set(100, 0, 0)
scene.add(directionalLightRight)

const directionalLightLeft = new THREE.DirectionalLight(0xffffff, 1)
directionalLightLeft.position.set(-100, 0, 0)
scene.add(directionalLightLeft)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 10000)
camera.position.set(-2182.9838555936312, 945.3568562554974, 2991.913386682844)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 100, 390)
controls.enableDamping = false
controls.enablePan = false
controls.enableZoom = false
controls.enableRotate = true
controls.minDistance = 3500
controls.maxDistance = 3500

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialiasing: true,
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Mouse & Keys
 */

window.addEventListener('click', () => {

    // Mode 
    if(document.getElementById('overview-toggle').checked == true) { // Z-Coords somehow einarbeiten?
        if(document.getElementById('steffen-toggle').checked == true) {
            gsap.to(camera.position, {x:-2182.9838555936312, y:945.3568562554974, duration:2})
            gsap.to(controls.target, {x:-600, duration:1})
            gsap.to(controls, {minDistance:1500, duration:1})
            gsap.to(controls, {maxDistance:1500, duration:1})
            document.getElementById("snack").classList.remove("disabled")
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2 )
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.remove(energyBox)
        } else if(document.getElementById('sebastian-toggle').checked == true) {
            gsap.to(camera.position, {x:-2182.9838555936312, y:945.3568562554974, duration:2})
            gsap.to(controls.target, {x:0, duration:1})
            gsap.to(controls, {minDistance:1500, duration:1})
            gsap.to(controls, {maxDistance:1500, duration:1})
            document.getElementById("snack").classList.add("disabled");
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2 )
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.remove(energyBox)
        } else if(document.getElementById('anton-toggle').checked == true) {
            gsap.to(camera.position, {x:-2182.9838555936312, y:945.3568562554974, duration:2})
            gsap.to(controls.target, {x:600, duration:1})
            gsap.to(controls, {minDistance:1500, duration:1})
            gsap.to(controls, {maxDistance:1500, duration:1})
            document.getElementById("snack").classList.remove("disabled")
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2 )
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.remove(energyBox)
        } else if(document.getElementById('steffen-toggle').checked != true || document.getElementById('seby-toggle').checked != true || document.getElementById('anton-toggle').checked != true) {
            gsap.to(camera.position, {x:-2182.9838555936312, y:945.3568562554974, z:2991.913386682844, duration:2})
            gsap.to(controls.target, {x:0, y:100, z:390, duration:1})
            gsap.to(controls, {minDistance:3500, duration:1})
            gsap.to(controls, {maxDistance:3500, duration:1})
        }
    } else if(document.getElementById('mood-toggle').checked == true) {
        if(document.getElementById('steffen-toggle').checked == true) {
            gsap.to(camera.position, {x:-600.0012000525843397125, y:3587.3812, duration: 1})
            gsap.to(controls.target, {x:-600, duration:1})
            gsap.to(controls, {minDistance:1200, duration:1})
            gsap.to(controls, {maxDistance:1200, duration:1})
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2, snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.remove(energyBox)
            document.getElementById("snack").classList.remove("disabled");
        } else if(document.getElementById('sebastian-toggle').checked == true) {
            gsap.to(camera.position, {x:-0.0012000525843397125, y:3587.3812, duration: 1})
            gsap.to(controls.target, {x:0, duration:1})
            gsap.to(controls, {minDistance:1200, duration:1})
            gsap.to(controls, {maxDistance:1200, duration:1})
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2 )
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.remove(energyBox)
            document.getElementById("snack").classList.add("disabled");
        } else if(document.getElementById('anton-toggle').checked == true) {
            gsap.to(camera.position, {x:599.4831110770058, y:3587.3812, duration: 1})
            gsap.to(controls.target, {x:600, duration:1})
            gsap.to(controls, {minDistance:1200, duration:1})
            gsap.to(controls, {maxDistance:1200, duration:1})
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.remove(energyBox)
            document.getElementById("snack").classList.remove("disabled");
        } else if(document.getElementById('steffen-toggle').checked != true || document.getElementById('seby-toggle').checked != true || document.getElementById('anton-toggle').checked != true) {
            gsap.to(camera.position, {z:390.00000000000017, y:3599.9999999982497, duration:1})
            gsap.to(camera.position, {x:-0.0034999999999994163, duration:2})
            gsap.to(controls, {minDistance:3500, duration:1})
            gsap.to(controls, {maxDistance:3500, duration:1})
        }
    } else if(document.getElementById('energylevel-toggle').checked == true) {
        if(document.getElementById('steffen-toggle').checked == true) {
            gsap.to(camera.position, {x:-1997.4779061786307, y:-0.11046930819357834, z:390.0000000000002, duration:2})
            gsap.to(controls.target, {x:-600, y:0, duration:1})
            gsap.to(controls, {minDistance:900, duration:1})
            gsap.to(controls, {maxDistance:900, duration:1})
            document.getElementById("snack").classList.remove("disabled");
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.add(lineSeby)
            energyBox.position.x = -400
            scene.add(energyBox)
        } else if(document.getElementById('sebastian-toggle').checked == true) {
            gsap.to(camera.position, {x:-1997.4779061786307, y:-0.11046930819357834, z:390.0000000000002, duration:2})
            gsap.to(controls.target, {x:0, y:0, duration:1})
            gsap.to(controls, {minDistance:900, duration:1})
            gsap.to(controls, {maxDistance:900, duration:1})
            document.getElementById("snack").classList.add("disabled");
            scene.remove(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            scene.add(energyBox)
            energyBox.position.x = 400
        } else if(document.getElementById('anton-toggle').checked == true) {
            gsap.to(camera.position, {x:-1997.4779061786307, y:-0.11046930819357834, z:390.0000000000002, duration:2})
            gsap.to(controls.target, {x:600, y:0, duration:1})
            gsap.to(controls, {minDistance:900, duration:1})
            gsap.to(controls, {maxDistance:900, duration:1})
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.remove(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                        carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            document.getElementById("snack").classList.remove("disabled");
            scene.remove(energyBox)
        } else if(document.getElementById('steffen-toggle').checked != true || document.getElementById('seby-toggle').checked != true || document.getElementById('anton-toggle').checked != true) {
            gsap.to(camera.position, {x:-1997.4779061786307, y:-0.11046930819357834, z:390.0000000000002, duration:2})
            gsap.to(controls.target, {y:0, duration:1})
            gsap.to(controls, {minDistance:2000, duration:1})
            gsap.to(controls, {maxDistance:2000, duration:1})
        }
    }

    console.log(camera.position)

    // Meal

    if(document.getElementById('breakfast-toggle').checked) {
        if(document.getElementById('steffen-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesSteffen.breakfastRealTime.toString().slice(0,1) + ':' + mealValuesSteffen.breakfastRealTime.toString().slice(1,3)
            mealType.innerHTML = 'Frühstück'
            calorieValue.innerHTML = mealValuesSteffen.breakfastCalories
            caloriePercent.innerHTML = (mealValuesSteffen.breakfastCalories/mealValuesSteffen.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesSteffen.calorieGoal
            calorieProgress.style.width = (mealValuesSteffen.breakfastCalories/mealValuesSteffen.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesSteffen.breakfastProtein
            proteinGoal.innerHTML = mealValuesSteffen.proteinGoal
            proteinPercent.innerHTML = (mealValuesSteffen.breakfastProtein/mealValuesSteffen.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesSteffen.breakfastProtein/mealValuesSteffen.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesSteffen.breakfastFat
            fatGoal.innerHTML = mealValuesSteffen.fatGoal
            fatPercent.innerHTML = (mealValuesSteffen.breakfastFat/mealValuesSteffen.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesSteffen.breakfastFat/mealValuesSteffen.fatGoal*100).toString() + '%'
            carbValue.innerHTML = mealValuesSteffen.breakfastCarbs
            carbGoal.innerHTML = mealValuesSteffen.carbGoal
            carbPercent.innerHTML = (mealValuesSteffen.breakfastCarbs/mealValuesSteffen.carbGoal*100).toString().slice(0,2)
            carbProgress.style.width = (mealValuesSteffen.breakfastCarbs/mealValuesSteffen.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesSteffen.firstMoodMeasurement-600, y:mealValuesSteffen.firstEnergyMeasurement, z:mealValuesSteffen.breakfastTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
        if(document.getElementById('sebastian-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.add("disabled");
            mealTime.innerHTML = mealValuesSeby.breakfastRealTime.toString().slice(0,1) + ':' + mealValuesSeby.breakfastRealTime.toString().slice(1,3)
            mealType.innerHTML = 'Frühstück'
            calorieValue.innerHTML = mealValuesSeby.breakfastCalories
            caloriePercent.innerHTML = (mealValuesSeby.breakfastCalories/mealValuesSeby.calorieGoal*100).toString().slice(0,1)
            calorieGoal.innerHTML = mealValuesSeby.calorieGoal
            calorieProgress.style.width = (mealValuesSeby.breakfastCalories/mealValuesSeby.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesSeby.breakfastProtein
            proteinGoal.innerHTML = mealValuesSeby.proteinGoal
            proteinPercent.innerHTML = (mealValuesSeby.breakfastProtein/mealValuesSeby.proteinGoal*100).toString().slice(0,1)
            proteinProgress.style.width = (mealValuesSeby.breakfastProtein/mealValuesSeby.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesSeby.breakfastFat
            fatGoal.innerHTML = mealValuesSeby.fatGoal
            fatPercent.innerHTML = (mealValuesSeby.breakfastFat/mealValuesSeby.fatGoal*100).toString().slice(0,1)
            fatProgress.style.width = (mealValuesSeby.breakfastFat/mealValuesSeby.fatGoal*100).toString() + '%'
            carbValue.innerHTML = mealValuesSeby.breakfastCarbs
            carbGoal.innerHTML = mealValuesSeby.carbGoal
            carbPercent.innerHTML = (mealValuesSeby.breakfastCarbs/mealValuesSeby.carbGoal*100).toString().slice(0,1)
            carbProgress.style.width = (mealValuesSeby.breakfastCarbs/mealValuesSeby.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesSeby.firstMoodMeasurement, y:mealValuesSeby.firstEnergyMeasurement, z:mealValuesSeby.breakfastTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
        if(document.getElementById('anton-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesAnton.breakfastRealTime.toString().slice(0,2) + ':' + mealValuesAnton.breakfastRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Frühstück'
            calorieValue.innerHTML = mealValuesAnton.breakfastCalories
            caloriePercent.innerHTML = (mealValuesAnton.breakfastCalories/mealValuesAnton.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesAnton.calorieGoal
            calorieProgress.style.width = (mealValuesAnton.breakfastCalories/mealValuesAnton.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesAnton.breakfastProtein
            proteinGoal.innerHTML = mealValuesAnton.proteinGoal
            proteinPercent.innerHTML = (mealValuesAnton.breakfastProtein/mealValuesAnton.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesAnton.breakfastProtein/mealValuesAnton.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesAnton.breakfastFat
            fatGoal.innerHTML = mealValuesAnton.fatGoal
            fatPercent.innerHTML = (mealValuesAnton.breakfastFat/mealValuesAnton.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesAnton.breakfastFat/mealValuesAnton.fatGoal*100).toString() + '%'
            carbValue.innerHTML = mealValuesAnton.breakfastCarbs
            carbGoal.innerHTML = mealValuesAnton.carbGoal
            carbPercent.innerHTML = (mealValuesAnton.breakfastCarbs/mealValuesAnton.carbGoal*100).toString().slice(0,2)
            carbProgress.style.width = (mealValuesAnton.breakfastCarbs/mealValuesAnton.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesAnton.firstMoodMeasurement+600, y:mealValuesAnton.firstEnergyMeasurement, z:mealValuesAnton.breakfastTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
    } else if(document.getElementById('lunch-toggle').checked) {
        if(document.getElementById('steffen-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesSteffen.lunchRealTime.toString().slice(0,2) + ':' + mealValuesSteffen.lunchRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Mittagessen'
            calorieValue.innerHTML = mealValuesSteffen.lunchCalories
            caloriePercent.innerHTML = (mealValuesSteffen.lunchCalories/mealValuesSteffen.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesSteffen.calorieGoal
            calorieProgress.style.width = (mealValuesSteffen.lunchCalories/mealValuesSteffen.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesSteffen.lunchProtein
            proteinGoal.innerHTML = mealValuesSteffen.proteinGoal
            proteinPercent.innerHTML = (mealValuesSteffen.lunchProtein/mealValuesSteffen.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesSteffen.lunchProtein/mealValuesSteffen.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesSteffen.lunchFat
            fatGoal.innerHTML = mealValuesSteffen.fatGoal
            fatPercent.innerHTML = (mealValuesSteffen.lunchFat/mealValuesSteffen.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesSteffen.lunchFat/mealValuesSteffen.fatGoal*100).toString() + '%'
            carbValue.innerHTML = mealValuesSteffen.lunchCarbs
            carbGoal.innerHTML = mealValuesSteffen.carbGoal
            carbPercent.innerHTML = (mealValuesSteffen.lunchCarbs/mealValuesSteffen.carbGoal*100).toString().slice(0,1)
            carbProgress.style.width = (mealValuesSteffen.lunchCarbs/mealValuesSteffen.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesSteffen.secondMoodMeasurement-600, y:mealValuesSteffen.secondEnergyMeasurement, z:mealValuesSteffen.lunchTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
        if(document.getElementById('sebastian-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.add("disabled");
            mealTime.innerHTML = mealValuesSeby.lunchRealTime.toString().slice(0,2) + ':' + mealValuesSeby.lunchRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Mittagessen'
            calorieValue.innerHTML = mealValuesSeby.lunchCalories
            caloriePercent.innerHTML = (mealValuesSeby.lunchCalories/mealValuesSeby.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesSeby.calorieGoal
            calorieProgress.style.width = (mealValuesSeby.lunchCalories/mealValuesSeby.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesSeby.lunchProtein
            proteinGoal.innerHTML = mealValuesSeby.proteinGoal
            proteinPercent.innerHTML = (mealValuesSeby.lunchProtein/mealValuesSeby.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesSeby.lunchProtein/mealValuesSeby.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesSeby.lunchFat
            fatGoal.innerHTML = mealValuesSeby.fatGoal
            fatPercent.innerHTML = (mealValuesSeby.lunchFat/mealValuesSeby.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesSeby.lunchFat/mealValuesSeby.fatGoal*100).toString() + '%'
            carbValue.innerHTML = mealValuesSeby.lunchCarbs
            carbGoal.innerHTML = mealValuesSeby.carbGoal
            carbPercent.innerHTML = (mealValuesSeby.lunchCarbs/mealValuesSeby.carbGoal*100).toString().slice(0,2)
            carbProgress.style.width = (mealValuesSeby.lunchCarbs/mealValuesSeby.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesSeby.secondMoodMeasurement, y:mealValuesSeby.secondEnergyMeasurement, z:mealValuesSeby.lunchTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
        if(document.getElementById('anton-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesAnton.lunchRealTime.toString().slice(0,2) + ':' + mealValuesAnton.lunchRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Mittagessen'
            calorieValue.innerHTML = mealValuesAnton.lunchCalories
            caloriePercent.innerHTML = (mealValuesAnton.lunchCalories/mealValuesAnton.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesAnton.calorieGoal
            calorieProgress.style.width = (mealValuesAnton.lunchCalories/mealValuesAnton.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesAnton.lunchProtein
            proteinGoal.innerHTML = mealValuesAnton.proteinGoal
            proteinPercent.innerHTML = (mealValuesAnton.lunchProtein/mealValuesAnton.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesAnton.lunchProtein/mealValuesAnton.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesAnton.lunchFat
            fatGoal.innerHTML = mealValuesAnton.fatGoal
            fatPercent.innerHTML = (mealValuesAnton.lunchFat/mealValuesAnton.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesAnton.lunchFat/mealValuesAnton.fatGoal*100).toString() + '%'
            carbValue.innerHTML = mealValuesAnton.lunchCarbs
            carbGoal.innerHTML = mealValuesAnton.carbGoal
            carbPercent.innerHTML = (mealValuesAnton.lunchCarbs/mealValuesAnton.carbGoal*100).toString().slice(0,2)
            carbProgress.style.width = (mealValuesAnton.lunchCarbs/mealValuesAnton.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesAnton.secondMoodMeasurement+600, y:mealValuesAnton.secondEnergyMeasurement, z:mealValuesAnton.lunchTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
    } else if(document.getElementById('dinner-toggle').checked) {
        if(document.getElementById('steffen-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesSteffen.dinnerRealTime.toString().slice(0,2) + ':' + mealValuesSteffen.dinnerRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Abendessen'
            calorieValue.innerHTML = mealValuesSteffen.dinnerCalories
            caloriePercent.innerHTML = (mealValuesSteffen.dinnerCalories/mealValuesSteffen.calorieGoal*100).toString().slice(0,1)
            calorieGoal.innerHTML = mealValuesSteffen.calorieGoal
            calorieProgress.style.width = (mealValuesSteffen.dinnerCalories/mealValuesSteffen.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesSteffen.dinnerProtein
            proteinGoal.innerHTML = mealValuesSteffen.proteinGoal
            proteinPercent.innerHTML = (mealValuesSteffen.dinnerProtein/mealValuesSteffen.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesSteffen.dinnerProtein/mealValuesSteffen.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesSteffen.dinnerFat
            fatGoal.innerHTML = mealValuesSteffen.fatGoal
            fatPercent.innerHTML = (mealValuesSteffen.dinnerFat/mealValuesSteffen.fatGoal*100).toString().slice(0,1)
            fatProgress.style.width = (mealValuesSteffen.dinnerFat/mealValuesSteffen.fatGoal*100).toString() + '%'
            carbValue.innerHTML = mealValuesSteffen.dinnerCarbs
            carbGoal.innerHTML = mealValuesSteffen.carbGoal
            carbPercent.innerHTML = (mealValuesSteffen.dinnerCarbs/mealValuesSteffen.carbGoal*100).toString().slice(0,1)
            carbProgress.style.width = (mealValuesSteffen.dinnerCarbs/mealValuesSteffen.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesSteffen.thirdMoodMeasurement-600, y:mealValuesSteffen.thirdEnergyMeasurement, z:mealValuesSteffen.dinnerTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
        if(document.getElementById('sebastian-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.add("disabled");
            mealTime.innerHTML = mealValuesSeby.dinnerRealTime.toString().slice(0,2) + ':' + mealValuesSeby.dinnerRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Abendessen'
            calorieValue.innerHTML = mealValuesSeby.dinnerCalories
            caloriePercent.innerHTML = (mealValuesSeby.dinnerCalories/mealValuesSeby.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesSeby.calorieGoal
            calorieProgress.style.width = (mealValuesSeby.dinnerCalories/mealValuesSeby.calorieGoal*100).toString() + '%'
            proteinValue.innerHTML = mealValuesSeby.dinnerProtein
            proteinGoal.innerHTML = mealValuesSeby.proteinGoal
            proteinPercent.innerHTML = (mealValuesSeby.dinnerProtein/mealValuesSeby.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesSeby.dinnerProtein/mealValuesSeby.proteinGoal*100).toString() + '%'
            fatValue.innerHTML = mealValuesSeby.dinnerFat
            fatGoal.innerHTML = mealValuesSeby.fatGoal
            fatPercent.innerHTML = (mealValuesSeby.dinnerFat/mealValuesSeby.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesSeby.dinnerFat/mealValuesSeby.fatGoal*100*2).toString() + '%'
            carbValue.innerHTML = mealValuesSeby.dinnerCarbs
            carbGoal.innerHTML = mealValuesSeby.carbGoal
            carbPercent.innerHTML = (mealValuesSeby.dinnerCarbs/mealValuesSeby.carbGoal*100).toString().slice(0,2)
            carbProgress.style.width = (mealValuesSeby.dinnerCarbs/mealValuesSeby.carbGoal*100).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesSeby.thirdMoodMeasurement, y:mealValuesSeby.thirdEnergyMeasurement, z:mealValuesSeby.dinnerTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
        if(document.getElementById('anton-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesAnton.dinnerRealTime.toString().slice(0,2) + ':' + mealValuesAnton.dinnerRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Abendessen'
            calorieValue.innerHTML = mealValuesAnton.dinnerCalories
            caloriePercent.innerHTML = (mealValuesAnton.dinnerCalories/mealValuesAnton.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesAnton.calorieGoal
            calorieProgress.style.width = (mealValuesAnton.dinnerCalories/mealValuesAnton.calorieGoal*100*2).toString() + '%'
            proteinValue.innerHTML = mealValuesAnton.dinnerProtein
            proteinGoal.innerHTML = mealValuesAnton.proteinGoal
            proteinPercent.innerHTML = (mealValuesAnton.dinnerProtein/mealValuesAnton.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesAnton.dinnerProtein/mealValuesAnton.proteinGoal*100*2).toString() + '%'
            fatValue.innerHTML = mealValuesAnton.dinnerFat
            fatGoal.innerHTML = mealValuesAnton.fatGoal
            fatPercent.innerHTML = (mealValuesAnton.dinnerFat/mealValuesAnton.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesAnton.dinnerFat/mealValuesAnton.fatGoal*100*2).toString() + '%'
            carbValue.innerHTML = mealValuesAnton.dinnerCarbs
            carbGoal.innerHTML = mealValuesAnton.carbGoal
            carbPercent.innerHTML = (mealValuesAnton.dinnerCarbs/mealValuesAnton.carbGoal*100).toString().slice(0,2)
            carbProgress.style.width = (mealValuesAnton.dinnerCarbs/mealValuesAnton.carbGoal*100*2).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesAnton.thirdMoodMeasurement+600, y:mealValuesAnton.thirdEnergyMeasurement, z:mealValuesAnton.dinnerTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
    } else if(document.getElementById('snack-toggle').checked) {
        if(document.getElementById('steffen-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesSteffen.snackRealTime.toString().slice(0,2) + ':' + mealValuesSteffen.snackRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Snack'
            calorieValue.innerHTML = mealValuesSteffen.firstSnackCalories
            caloriePercent.innerHTML = (mealValuesSteffen.firstSnackCalories/mealValuesSteffen.calorieGoal*100).toString().slice(0,1)
            calorieGoal.innerHTML = mealValuesSteffen.calorieGoal
            calorieProgress.style.width = (mealValuesSteffen.firstSnackCalories/mealValuesSteffen.calorieGoal*100*2).toString() + '%'
            proteinValue.innerHTML = mealValuesSteffen.firstSnackProtein
            proteinGoal.innerHTML = mealValuesSteffen.proteinGoal
            proteinPercent.innerHTML = (mealValuesSteffen.firstSnackProtein/mealValuesSteffen.proteinGoal*100).toString().slice(0,2)
            proteinProgress.style.width = (mealValuesSteffen.firstSnackProtein/mealValuesSteffen.proteinGoal*100*2).toString() + '%'
            fatValue.innerHTML = mealValuesSteffen.firstSnackFat
            fatGoal.innerHTML = mealValuesSteffen.fatGoal
            fatPercent.innerHTML = (mealValuesSteffen.firstSnackFat/mealValuesSteffen.fatGoal*100).toString().slice(0,1)
            fatProgress.style.width = (mealValuesSteffen.firstSnackFat/mealValuesSteffen.fatGoal*100*2).toString() + '%'
            carbValue.innerHTML = mealValuesSteffen.firstSnackCarbs
            carbGoal.innerHTML = mealValuesSteffen.carbGoal
            carbPercent.innerHTML = (mealValuesSteffen.firstSnackCarbs/mealValuesSteffen.carbGoal*100).toString().slice(0,1)
            carbProgress.style.width = (mealValuesSteffen.firstSnackCarbs/mealValuesSteffen.carbGoal*100*2).toString() + '%'
           
            scene.remove(energyBox)
            gsap.to(controls.target, {x:mealValuesSteffen.fourthMoodMeasurement-600, y:mealValuesSteffen.fourthEnergyMeasurement, z:mealValuesSteffen.firstSnackTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
        if(document.getElementById('anton-toggle').checked) {
            document.getElementById('overview-toggle').checked = false
            document.getElementById('mood-toggle').checked = false
            document.getElementById('energylevel-toggle').checked = false
            document.getElementById('meal-info-container').classList.remove('hidden')
            document.getElementById("snack").classList.remove("disabled");
            mealTime.innerHTML = mealValuesAnton.snackRealTime.toString().slice(0,2) + ':' + mealValuesAnton.snackRealTime.toString().slice(2,4)
            mealType.innerHTML = 'Snack'
            calorieValue.innerHTML = mealValuesAnton.firstSnackCalories
            caloriePercent.innerHTML = (mealValuesAnton.firstSnackCalories/mealValuesAnton.calorieGoal*100).toString().slice(0,2)
            calorieGoal.innerHTML = mealValuesAnton.calorieGoal
            calorieProgress.style.width = (mealValuesAnton.firstSnackCalories/mealValuesAnton.calorieGoal*100*2).toString() + '%'
            proteinValue.innerHTML = mealValuesAnton.firstSnackProtein
            proteinGoal.innerHTML = mealValuesAnton.proteinGoal
            proteinPercent.innerHTML = (mealValuesAnton.firstSnackProtein/mealValuesAnton.proteinGoal*100).toString().slice(0,1)
            proteinProgress.style.width = (mealValuesAnton.firstSnackProtein/mealValuesAnton.proteinGoal*100*2).toString() + '%'
            fatValue.innerHTML = mealValuesAnton.firstSnackFat
            fatGoal.innerHTML = mealValuesAnton.fatGoal
            fatPercent.innerHTML = (mealValuesAnton.firstSnackFat/mealValuesAnton.fatGoal*100).toString().slice(0,2)
            fatProgress.style.width = (mealValuesAnton.firstSnackFat/mealValuesAnton.fatGoal*100*2).toString() + '%'
            carbValue.innerHTML = mealValuesAnton.firstSnackCarbs
            carbGoal.innerHTML = mealValuesAnton.carbGoal
            carbPercent.innerHTML = (mealValuesAnton.firstSnackCarbs/mealValuesAnton.carbGoal*100).toString().slice(0,1)
            carbProgress.style.width = (mealValuesAnton.firstSnackCarbs/mealValuesAnton.carbGoal*100*2).toString() + '%'

            scene.remove(energyBox)
            scene.add(lineSteffen, lunchCubeSteffen, fatShapeLunch2, proteinShapeLunch2, carbShapeLunch2, calorieShapeLunch2, breakfastCubeSteffen, fatShapeBreakfast2, proteinShapeBreakfast2,
                carbShapeBreakfast2, calorieShapeBreakfast2,dinnerCubeSteffen, fatShapeDinner2, proteinShapeDinner2, carbShapeDinner2, calorieShapeDinner2,snackCubeSteffen, fatShapeFirstSnack2, proteinShapeFirstSnack2, carbShapeFirstSnack2, calorieShapeFirstSnack2)
            scene.add(lineSeby, lunchCubeSeby, fatShapeLunch, proteinShapeLunch, carbShapeLunch, calorieShapeLunch, breakfastCubeSeby, fatShapeBreakfast, proteinShapeBreakfast,
                carbShapeBreakfast, calorieShapeBreakfast,dinnerCubeSeby, fatShapeDinner, proteinShapeDinner, carbShapeDinner, calorieShapeDinner,)
            
            gsap.to(controls.target, {x:mealValuesAnton.fourthMoodMeasurement+600, y:mealValuesAnton.fourthEnergyMeasurement, z:mealValuesAnton.firstSnackTime, duration:1})
            gsap.to(controls, {minDistance:200, duration:1})
            gsap.to(controls, {maxDistance:200, duration:1})
        }
    }
})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    if (mixer) {
        mixer.update(deltaTime)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

// Person-Selector

const sebastianToggle = document.getElementById("sebastian-toggle");
const steffenToggle = document.getElementById("steffen-toggle");
const antonToggle = document.getElementById("anton-toggle");
const mealSelector = document.getElementById("meal-selector");

sebastianToggle.addEventListener("click", enableMealSelector)
steffenToggle.addEventListener("click", enableMealSelector)
antonToggle.addEventListener("click", enableMealSelector)

function enableMealSelector() {
    if (mealSelector.classList.contains("disabled")) {
        mealSelector.classList.remove("disabled");
    }

    if(sebastianToggle.checked) {
        //document.getElementById("snack").classList.add("disabled");
    }
}

// No snacks for seby
import * as THREE from "three";
import { Config, pickRandom, ThreeHeights } from "../config";

export default class ThreeItem extends THREE.Group {
  constructor() {
    super();

    this._height = pickRandom(ThreeHeights);
    this._build();
  }

  _build() {
    this._buildBody();
    this._buildLeaves();
  }

  _buildBody() {
    const { zoom } = Config;

    const geom = new THREE.BoxBufferGeometry(15 * zoom, 15 * zoom, 20 * zoom);
    const material = new THREE.MeshPhongMaterial({ color: 0x4d2926, flatShading: true });
    const body = new THREE.Mesh(geom, material);

    body.position.z = 10 * zoom;
    body.castShadow = true;
    body.receiveShadow = true;

    this.add((this._body = body));
  }

  _buildLeaves() {
    const { zoom } = Config;

    const geom = new THREE.BoxBufferGeometry(30 * zoom, 30 * zoom, height * zoom);
    const material = new THREE.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true });
    const head = new THREE.Mesh(geom, material);

    head.position.z = (height / 2 + 20) * zoom;
    head.castShadow = true;
    head.receiveShadow = false;

    this.add((this._head = head));
  }
}

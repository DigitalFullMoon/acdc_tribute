# **ACDC TRIBUTE**

<p align="center">
  <img src="site/asset/img/ac-dc-2.webp" alt="Logo AC/DC" width="300">
</p>

Ce mini projet est issu d'un TP de ma formation de Développeur Web Web Mobile. Pour les besoins de mon portfolio, je l'ai entièrement refait, en incluant de nouvelles fonctionnalités et un travail en local avec Docker.

---

## 1. Arborescence du projet

```
02-ACDC_TRIBUTE/
├── docker-compose.yml
├── README.md
├── zzlire.txt
├── docker/
│   └── nginx/
│       └── default.conf
├── site/
│   ├── index.html
│   ├── asset/
│   │   ├── font/
│   │   ├── img/
│   │   │   └── Discographie/
│   │   └── sound/
│   │       └── police/
│   │           └── OFL.txt
│   ├── css/
│   │   ├── bootstrap.css
│   │   └── style.css
│   └── js/
│       ├── bootstrap.bundle.js
│       └── script.js
```

---

## 2. Techniques employées

- **HTML5/CSS3** : Structure sémantique, responsive design, accessibilité avancée
- **JavaScript** : Interactions dynamiques, gestion du son, filtrage des formulaires, accessibilité modale
- **Bootstrap** : Framework CSS pour la grille, les composants et la responsivité
- **FontAwesome** : Icônes vectorielles pour enrichir l’UI
- **Docker & Nginx** : Conteneurisation du site statique pour un déploiement local rapide et reproductible
- **Organisation modulaire** : Séparation claire des assets, scripts, styles et configuration

---

## 3. Points forts du projet

- Design fidèle à l’univers AC/DC (palette, typographie, animations)
- Accessibilité renforcée (skip-link, focus visible, contrastes, réduction d’animations)
- Responsive design complet (mobile, tablette, desktop, très grands écrans)
- Utilisation de polices personnalisées et d’icônes
- Déploiement local simple et rapide grâce à Docker
- Code commenté et structuré pour la maintenabilité

---

## 4. Documents de déploiement

### Prérequis
- Docker installé sur votre machine

### Installation et lancement
1. Cloner le projet ou copier l’arborescence sur votre machine
2. Ouvrir un terminal dans le dossier du projet
3. Lancer la commande suivante :
   ```
   docker-compose up -d
   ```
4. Accéder au site via votre navigateur à l’adresse :
   [http://localhost:8081](http://localhost:8081)

### Arrêt du projet
```
docker-compose down
```

---

Pour toute question ou suggestion, contactez-moi sur [GitHub](https://github.com/DigitalFullMoon).

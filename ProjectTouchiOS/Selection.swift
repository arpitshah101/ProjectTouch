//
//  Selection.swift
//  ProjectTouchiOS
//
//  Created by Qasim Abbas on 8/7/16.
//  Copyright © 2016 Qasim Abbas. All rights reserved.
//

import UIKit

class Selection: UIViewController, UICollectionViewDelegate,
UICollectionViewDataSource{
    var arrData : [String] = ["beads.png","beanbags.png","books.png","gator.png", "playdoh.png", "sand.png"]
    private let reuseIdentifier = "showCell"
    var stringName: String!
    
    func numberOfSectionsInCollectionView(collectionView: UICollectionView) -> Int {
        return 1
    }
    @IBOutlet weak var compCollection: UICollectionView!
    @IBAction func swipeUp(sender: AnyObject) {
        self.performSegueWithIdentifier("nextSegue", sender: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

    }
    
    func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return arrData.count
    }
    
    func collectionView(collectionView: UICollectionView, cellForItemAtIndexPath indexPath: NSIndexPath) -> UICollectionViewCell {
         let cell = collectionView.dequeueReusableCellWithReuseIdentifier(reuseIdentifier, forIndexPath: indexPath)
        cell.backgroundColor = UIColor.whiteColor()
        
        switch indexPath.row {
        case 0:
            cell.backgroundView = UIImageView(image: UIImage(named: "beads.png"))
            break
        case 1:
            cell.backgroundView = UIImageView(image: UIImage(named: "beanbags.png"))
            break
        case 2:
            cell.backgroundView = UIImageView(image: UIImage(named: "books.png"))
            break
        case 3:
            cell.backgroundView = UIImageView(image: UIImage(named: "gator.png"))
            break
        case 4:
            cell.backgroundView = UIImageView(image: UIImage(named: "playdoh.png"))
            break
        case 5:
            
            cell.backgroundView = UIImageView(image: UIImage(named: "sand.png"))
            break

        default:
            
            break
        }
        
        
        return cell
    }
    
    func  collectionView(collectionView: UICollectionView, didSelectItemAtIndexPath indexPath: NSIndexPath) {
        
       // let cell = compCollection.cellForItemAtIndexPath(indexPath)
       // cell?.frame = CGRectMake(((cell?.frame.origin.x)!), ((cell?.frame.origin.y)!) - 20, cell!.frame.width, (cell?.frame.height)!)
        
        stringName = arrData[indexPath.row]
    }
    
    func  collectionView(collectionView: UICollectionView, didDeselectItemAtIndexPath indexPath: NSIndexPath) {
      //  let cell = compCollection.cellForItemAtIndexPath(indexPath)
      //  cell?.frame = CGRectMake(((cell?.frame.origin.x)!), ((cell?.frame.origin.y)!) + 20, cell!.frame.width, (cell?.frame.height)!)
        
        
    }
    
    override func prepareForSegue(segue: UIStoryboardSegue, sender: AnyObject?) {
        if(segue.identifier == "nextSegue"){
            let disp :DisplayImage = segue.destinationViewController as! DisplayImage
            
            disp.imageName = stringName
            
        }
    }

    
}
